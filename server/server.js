const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');

const myGraphQLSchema = require('./schema')

const app = express();
const port = 5000;

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.listen(port, () => console.info(`Server started on port ${port}`));