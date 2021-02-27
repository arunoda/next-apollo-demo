import { withApollo } from 'next-apollo'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloConfig = new ApolloClient({
    uri: process.env.API_BASE_URL,
    cache: new InMemoryCache()
});

export default apolloConfig;