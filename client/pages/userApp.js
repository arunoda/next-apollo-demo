import Link from 'next/link';
import { ApolloProvider} from "@apollo/client";
import {Users} from '../components/Users/Users';
import {client} from '../lib/apolloConfig';
import 'font-awesome/css/font-awesome.min.css'
export default function userApp() {
 return (
   <>
   <Link href="/"><a>Go Back</a></Link>
     <ApolloProvider client={client}>
       <Users/>
     </ApolloProvider>
  </>
 )
}

