import Link from 'next/link'
import Users from "../components/Users";
import client from '../lib/with-apollo';
import { ApolloProvider } from "@apollo/client";

export default () => (
  <ApolloProvider client={client}>
    <Users />
    <br/><br/>
    <Link href="/"><a>Go Back</a></Link>
  </ApolloProvider>
)
