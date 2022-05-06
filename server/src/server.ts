import express from 'express';
import graphQLSchema from './schema/schema';

import cors from 'cors';

const APP = express();

APP.use(cors());

/* For Apollo Server Express 3.0 and above,
we need to define an async function for Apollo initialization as before */

async function startServer() {
  await graphQLSchema.start();

  // Middleware: GraphQL
  graphQLSchema.applyMiddleware({
    app: APP,
  });
}
startServer();

// Express: Port
const PORT = 5000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(
    `The server has started on port: ${PORT} \nhttp://localhost:${PORT}/graphql`
  );
});

// Exports
export default APP;
