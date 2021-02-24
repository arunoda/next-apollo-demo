import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { User } from '../components/User';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

import { animateScroll as scroll } from 'react-scroll';

const USER_QTY = 20;
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

const users = () => {
  const [ pagination, setPagination ] = useState(0);

  const moreUsers = () => {
    const nextQty = pagination + USER_QTY;
    setPagination(nextQty);
  }


  useEffect(() => {
    scroll.scrollToBottom();
  },[pagination])

  return (
    <ApolloProvider client={ client }>
        <div className="wrapper">
          <span data-testid="home-link">
            <Link href="/"><a>Go Back</a></Link>
          </span>
          <h2>Users page { pagination }</h2>
              <User 
                  from={ pagination }
                  qty={ USER_QTY }
              />
              
            <div className="button-container">
              <button data-testid="more-button" className="button" onClick={() => moreUsers() }>More</button>
            </div>
          </div>
      </ApolloProvider>
  )

};
export default users;

