import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { useSyncExternalStore } from "react";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          items: relayStylePagination(),
        },
      },
    },
  }),
});
// const state = useSyncExternalStore(client.subscribe, client.getSnapshot);

// client
//   .query({
//     query: gql`
//       query ExampleQuery {
//         getPersons {
//           name
//           age
//           address
//           email
//           phone
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));
export default client;
