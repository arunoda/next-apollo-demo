// import { withApollo } from 'next-apollo'
// import { HttpLink } from 'apollo-link-http'

// const apolloConfig = {
//   link: new HttpLink({
//     uri: 'https://faker-graphql.now.sh/graphql'
//   })
// }

// export default withApollo(apolloConfig)

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;