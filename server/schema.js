import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from "graphql";
import faker from "faker";

const myGraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            name: {
                type: GraphQLString,
                resolve() {
                    return faker.name.findName();
                },
            },
            users: {
                type: new GraphQLList(
                    new GraphQLObjectType({
                        name: "User",
                        fields: {
                            name: { type: GraphQLString },
                            address: { type: GraphQLString },
                            email: { type: GraphQLString },
                            phone: { type: GraphQLString },
                        },
                    }),
                ),
                resolve() {
                    return getUsers();
                },
            },
        },
    }),
});

function getUsers() {
    const list = [];
    for (let i = 0; i < 2000; i++) {
        list.push({
            name: faker.name.findName(),
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
        });
    }
    return list;
}

export default myGraphQLSchema;
