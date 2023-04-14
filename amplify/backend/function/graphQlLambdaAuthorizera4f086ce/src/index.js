/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["THIRDWEB_AUTH_PRIVATE_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* eslint-disable @typescript-eslint/no-var-requires */
const aws = require('aws-sdk');
const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const { ThirdwebAuth } = require('@thirdweb-dev/auth/express');
const { PrivateKeyWallet } = require('@thirdweb-dev/auth/evm');
const { config } = require('dotenv');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["THIRDWEB_AUTH_PRIVATE_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

config();

const app = express();
const { authRouter, authMiddleware, getUser } = ThirdwebAuth({
  domain: process.env.THIRDWEB_AUTH_DOMAIN,
  wallet: new PrivateKeyWallet(Parameters[THIRDWEB_AUTH_PRIVATE_KEY].Value),
  cookieOptions: {
    domain: process.env.THIRDWEB_AUTH_DOMAIN,
    path: "/api",
    sameSite: "none"
  }
});

app.use(authMiddleware);
app.use('/auth', authRouter);

app.get('/secret', async (req, res) => {
  const user = await getUser(req);

  if (!user) {
    return res.status(401).json({
      message: 'Not authorizeddd.',
    });
  }

  return res.status(200).json({
    message: "This is a secret... don't tell anyone.",
  });
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
