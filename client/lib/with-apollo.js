import { withApollo } from 'next-apollo'
import { ApolloClient,InMemoryCache } from '@apollo/client'

const apolloConfig = new ApolloClient({
    uri: process.env.API_BASE_URL || 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

export default withApollo(apolloConfig);
