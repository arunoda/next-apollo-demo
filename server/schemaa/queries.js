const { GraphQLList } = require("graphql");
const userdata =require('../userDataCasual');
const userType= require('../typedef/typedef');

module.exports.USER_LIST={
    type: new GraphQLList(userType),
    resolve(parent,args) {
      let data=userdata;
      return data;
    }
}