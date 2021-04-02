import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      --white: #fff;
      --red: #f52b2b;
      --blue: rgb(31, 141, 231);
      --black: #000;
      --grey: #222;
      --gray: var(--grey);
      --lightGrey: #ececec;
      --lightGray: var(--lightGrey);
      --offWhite: #ededed;
      --maxWidth: 1200px;
      box-sizing: border-box;
  }


  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

    body {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1rem;
      line-height: 1.5;
      background-color: var(--lightGray);
  }

  a {
      text-decoration: none;
      color: var(--black);
  }

  a:hover {
      text-decoration: underline;
  }

`;

const client = new ApolloClient({
  // this is the server uri
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
