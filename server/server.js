import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import myGraphQLSchema from "./schema.js";
import helmet from "helmet";

const app = express();
app.use(helmet());

// to access graphql API from the client side
app.use(cors());
// bodyParser is needed just for POST.
app.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({ schema: myGraphQLSchema }),
);
// for the graphiql interface
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Graphql Server started on: http://localhost:${port}`);
});
