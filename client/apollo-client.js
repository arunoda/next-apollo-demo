import getConfig from 'next/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.apiUrl);

const client = new ApolloClient({
  uri: publicRuntimeConfig.apiUrl,
  cache: new InMemoryCache(),
});

export default client;
