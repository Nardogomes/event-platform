import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogd8k0002r01xneh3y0cy6/master',
  cache: new InMemoryCache()
})
