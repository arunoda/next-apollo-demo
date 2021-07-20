import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:5000/graphql" }),
    cache: new InMemoryCache()

})

export default client