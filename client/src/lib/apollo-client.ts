import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://next-apollo-demo-api.onrender.com',
  cache: new InMemoryCache(),
})

export default client
