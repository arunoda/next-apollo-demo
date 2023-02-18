import Link from 'next/link'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const Page = () => {

  const GET_NAME = gql`
    query {
      name
    }
  `

  const {data} = useQuery(GET_NAME)

  return (<div>
    <div>Welcome, {data?.name}</div>

    <ul>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/users">Users</Link></li>
    </ul>
    
  </div>)
}

export default Page
