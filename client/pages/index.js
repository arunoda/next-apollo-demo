import Link from 'next/link'
import Name from '../components/Name'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/with-apollo'

const Page = () => (
  <ApolloProvider client={client}>
    <div>
      Welcome, <Name />
      <br/><br/>
      <Link href="/about"><a>About</a></Link><br/>
      <Link href="/contacts"><a>Contacts</a></Link>

    </div>
  </ApolloProvider>
)

export default Page
