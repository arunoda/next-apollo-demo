import React from 'react';
import Link from 'next/link'

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const URI = 'http://localhost:4000';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
            {
              users {
              firstname
              lastname
              address
              city
              state
              country
              phone
            }
          }
    `
  })
  .then(result => console.log(result));

  export default () => (
    <ApolloProvider client={ client }>
      <div>
        <span data-testid="user-link">
          <Link href="/users"><a>Go to Users page</a></Link>
        </span>
        <h2>Home page</h2>
        <p>This is the home page.  Click the link above to go to the user page.</p>
      </div>
  </ApolloProvider>
  )

  