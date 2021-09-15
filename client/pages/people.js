import Link from 'next/link'
import People from '../components/people'

const page = () => (
  <div>
    People
    <br/><br/>
    <People/>
    <Link href="/"><a>Go Back</a></Link>
  </div>
)

export default page;
