import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://next-apollo-demo-api.onrender.com',
    fetch,
  }),
  cache: new InMemoryCache(),
})

export default client
