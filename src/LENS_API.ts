import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const LENS_API_URL = process.env.NEXT_PUBLIC_LENS_API_URL

/* create the API client */
export const client = new ApolloClient({
  uri: LENS_API_URL,
  cache: new InMemoryCache()
})

const challengeQuery = gql`
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`

const authenticateMutation = gql`
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`

const verifyTokenQuery = gql`
  query VerifyToken($token: Jwt!) {
    verify(request: {
      accessToken: $token
    })
  }
`;

export const generateChallenge = async (address: string) => {
  const challenge = await client.query({
    query: challengeQuery,
    variables: {
      address,
    },
  });

  return challenge.data.challenge.text;
};

export const authenticate = async (address: string, signature: any) => {
  const result = await client.mutate({
    mutation: authenticateMutation,
    variables: {
      address,
      signature
    },
  });

  localStorage.setItem('accessToken', result.data.authenticate.accessToken);
  localStorage.setItem('refreshToken', result.data.authenticate.refreshToken);

  return result.data.authenticate;
};

export const verifyToken = async (token: string) => {
  const result = await client.query({
    query: verifyTokenQuery,
    variables: {
      token,
    },
  });

  return result.data.verify;
}