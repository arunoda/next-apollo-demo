import Link from 'next/link';
import Name from '../components/Name';

const Page = () => (
  <div>
    Welcome, <Name />
    <br /><br />
    <Link href="/about"><a>About</a></Link>
    <br />
    <Link href="/contact"><a>Contact</a></Link>
  </div>
)

export default Page;