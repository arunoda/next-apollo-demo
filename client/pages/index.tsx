import Link from 'next/link';
import Name from '../components/Name';
import client from '../lib/with-apollo';
import { ApolloProvider } from "@apollo/client";

const Page = () => (
  <ApolloProvider client={client}>
    Welcome, <Name />
    <br />
    <br />
    <Link data-testid="about-link" href="/about"><a>About</a></Link>
    <br />
    <br />
    <Link data-testid="user-link" href="/users"><a>Users list</a></Link>
  </ApolloProvider>
)

export default Page
