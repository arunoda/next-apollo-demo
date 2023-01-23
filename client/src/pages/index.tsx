import Link from 'next/link'
import client from '../lib/apollo-client'
import { gql } from '@apollo/client'
import Name from '@/components/name'

export default function Home({ name }: { name: string }) {
  return (
    <div>
      <h1 data-testid="welcome-text">
        Welcome, <Name name={name} />
      </h1>
      <br />
      <br />
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: getNameQuery,
  })

  return {
    props: {
      name: data.name,
    },
  }
}

export const getNameQuery = gql`
  query name {
    name
  }
`
