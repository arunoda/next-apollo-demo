import Link from 'next/link'
import dynamic from 'next/dynamic';

const About = () => (
  <div>
    About Page
    <br /><br />
    <Link href="/"><a>Go Back</a></Link>
  </div>
)

export default dynamic(() => Promise.resolve(About), { ssr: false });