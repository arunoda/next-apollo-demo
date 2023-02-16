import Link from 'next/link'
import withApollo from '../lib/with-apollo'
import Users from '../components/Grid'

const Page = () => (
  <div>
    <div>Welcome</div>

    <ul>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/users">Users</Link></li>
    </ul>
    
  </div>
)

export default Page
