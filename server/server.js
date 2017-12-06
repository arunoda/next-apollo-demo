const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const myGraphQLSchema = require('./schema')

const app = express();

// to access graphql API from the client side
app.use(cors())
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// for the graphiql interface
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
