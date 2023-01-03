import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../lib/with-apollo";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp