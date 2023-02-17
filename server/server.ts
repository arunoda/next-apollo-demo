import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql';
import { schema, resolvers } from './schema';

dotenv.config()

const app = express();

// to access graphql API from the client side
app.use(cors())
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
