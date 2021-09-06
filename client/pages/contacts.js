import Link from 'next/link'
import List from '../components/List'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/local-apollo-client'

const Contacts = () => {
    return (
      <ApolloProvider client={client}>
        <div className="container">
            <Link href="/"><a>Go Back</a></Link>
            <br /><br />
            <List />
        </div>
      </ApolloProvider>

    )
}

export default Contacts

