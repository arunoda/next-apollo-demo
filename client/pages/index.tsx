import Link from 'next/link'

const Page = () => (
  <div>
    Welcome <br/>
    <Link href="/about"><a>About</a></Link> <br/>
    <Link href="/user-list"><a>User List</a></Link>
  </div>
)

export default Page