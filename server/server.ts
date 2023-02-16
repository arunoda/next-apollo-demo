import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql';
import myGraphQLSchema from './schema'

const app = express();

// to access graphql API from the client side
app.use(cors())
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema: myGraphQLSchema,
  graphiql: true,
}));

const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
