import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://faker-graphql.now.sh/graphql",
    cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
