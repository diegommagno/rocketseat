import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4nzdet304zv01xn562mcv80/master',
  cache: new InMemoryCache()
})