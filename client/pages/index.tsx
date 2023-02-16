import Link from 'next/link'
import withApollo from '../lib/with-apollo'
import Users from '../components/Users'

const Page = () => (
  <div>
    Welcome
    <br/><br/>

    <ul>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/users">Users</Link></li>
    </ul>
    
  </div>
)

export default Page
