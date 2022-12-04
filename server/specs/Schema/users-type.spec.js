const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const UsersType = require("../../Schema/users-type");

describe("Testing Users schema", () => {
  it("should fetch fields integrity and match the object type", () => {
    let userFields = UsersType.getFields();
    expect(userFields).toHaveProperty("id");
    expect(userFields.id.type).toMatchObject(GraphQLInt);
    expect(userFields).toHaveProperty("name");
    expect(userFields.name.type).toMatchObject(GraphQLString);
    expect(userFields).toHaveProperty("address");
    expect(userFields.address.type).toBeInstanceOf(GraphQLObjectType);
  });
});
