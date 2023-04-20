/* eslint-disable @typescript-eslint/no-var-requires */
const { request } = require('graphql-request');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const {
    authorizationToken,
    requestContext: { apiId, requestId, accountId },
  } = event;
  
  const query = `{
    verify(request: {
      accessToken: "${authorizationToken}"
    })
  }`;

  const checkToken = await request('https://api-mumbai.lens.dev/', query)

  const response = {
    isAuthorized: checkToken.verify,
    resolverContext: {
      walletAddress: 'user-wallet-address',
      requestId: requestId,
      info: 'contextual information A',
    },
    deniedFields: [
      `Mutation.createUser`,
      `Mutation.deleteUser`,
      `Mutation.createProject`,
      `Mutation.deleteProject`,
      `Mutation.createCategory`,
      `Mutation.updateCategory`,
      `Mutation.deleteCategory`,
    ],
    ttlOverride: 300,
  };

  console.log(`response >`, JSON.stringify(response, null, 2));

  return response;
};
