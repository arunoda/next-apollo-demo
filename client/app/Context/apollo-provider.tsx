"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../../lib/apollo-client";

export default function ContextProvider({ children }) {
  const client = createApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
