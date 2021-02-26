const express = require('express')
const cors = require('cors')

const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./resolvers');
const typeDefs = require("./typeDefs");

// Generate random and save data
require('./helper/data').generateAndSave();

const server= new ApolloServer({typeDefs,resolvers});

const app = express();

// to access graphql API from the client side
app.use(cors())

const port = process.env.PORT || 4000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
