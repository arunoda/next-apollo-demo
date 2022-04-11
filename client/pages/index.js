import Link from 'next/link'
import withApollo from "../lib/with-apollo";
import Name from '../components/Name'

const Page = () => (
  <div>
    Welcome <Name />,
    <br /><br />
    <Link href="/about"><a>About</a></Link>

  </div>
)

// Default export is required for Fast Refresh
export default withApollo({ ssr: true })(Page);