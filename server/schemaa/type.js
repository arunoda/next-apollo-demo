const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
} =graphql
const userType= new GraphQLObjectType({
    name:'user',
    fields:()=>({
      name:{type:GraphQLString},
      address:{type:GraphQLString},
      phone:{type:GraphQLString},
      email:{type:GraphQLString},
    })
  })
  
  module.exports=userType