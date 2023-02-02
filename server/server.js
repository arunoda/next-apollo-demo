const express = require('express')
const port = process.env.PORT || 5000
const app = express();
const { graphqlHTTP } = require('express-graphql')


// const bodyParser = require('body-parser')
const cors = require('cors');
const schema = require('./schema')

// to access graphql API from the client side
app.use(cors())
app.use(express.json());
// bodyParser is needed just for POST.
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
// for the graphiql interface
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}`)
})


