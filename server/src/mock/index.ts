import {
  addMocksToSchema,
  relayStylePaginationMock,
} from "@graphql-tools/mock";
import casual from "casual";
import { buildSchema, GraphQLSchema } from "graphql";
import typeDefs from "../schema";

const schema = buildSchema(typeDefs);
let mockedSchema: GraphQLSchema;
mockedSchema = addMocksToSchema({
  schema,
  mocks: {
    Query: {
      items: () => ({
        edges: [...new Array(2000)].map((_, index) => ({
          node: {
            name: casual.name,
            age: casual.integer(1, 120),
            address: casual.address,
            email: casual.email,
            phone: casual.phone,
          },
        })),
      }),
    },
  },
  resolvers: (store) => ({
    Query: {
      items: relayStylePaginationMock(store),
    },
  }),
});

export default mockedSchema;
