const graphql = require('./schemaa/');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  
} =graphql

const userdata=require('./schemaa/userDummyData')

const userType= new GraphQLObjectType({
  name:'user',
  fields:()=>({
    name:{type:GraphQLString},
    address:{type:GraphQLString},
    phone:{type:GraphQLString},
    email:{type:GraphQLString},
  })
})

const RootQuery= new GraphQLObjectType({
  name: 'AllUsers',
  fields: {
    User: {
      type: new GraphQLList(userType),
      resolve(parent,args) {
        let data=userdata;
        console.log(data)
        return data;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
