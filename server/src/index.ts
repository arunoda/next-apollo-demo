import express from 'express';
import myGraphQLSchema from './schema';

const APP = express();

// For Apollo Server Express 3.0 and above,
// we need to define an async function for Apollo initialization as before

async function startServer() {
  await myGraphQLSchema.start();


 // Middleware: GraphQL
 myGraphQLSchema.applyMiddleware({
    app: APP
  });
}
startServer();


// Express: Port
const PORT = 5000 || process.env;

// Express: Listener

APP.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`The server has started on port: ${PORT} \nhttp://localhost:${PORT}/graphql`);
});

// Exports
export default APP;
