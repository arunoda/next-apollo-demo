import Link from 'next/link'
import Name from '../components/Name'

const Page = (): JSX.Element => (
  <div>
    Welcome, <Name />
    <br /><br />
    <Link href="/about"><a>About</a></Link>

  </div>
)

export default Page
