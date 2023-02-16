import Link from 'next/link'
import withApollo from '../lib/with-apollo'
import Users from '../components/Users'

const Page = () => (
  <div>
    Welcome, <Users />
    <br/><br/>
    <Link href="/about">About</Link>

  </div>
)

export default withApollo({ssr: false})(Page)
