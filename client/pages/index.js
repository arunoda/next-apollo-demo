import Link from 'next/link'
import { Nav } from "react-bootstrap";


const Page = () => (
  <Nav>
    <div style={{ marginRight: '4rem' }}>Welcome</div>
    <Nav.Item>
      <Link href="/about"><a style={{ marginRight: '2rem' }}>About</a></Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/gallery"><a>Gallery</a></Link>
    </Nav.Item>
  </Nav>
)

export default Page
