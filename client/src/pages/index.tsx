import Link from 'next/link'
import client from '../lib/apollo-client'
import { gql } from '@apollo/client'
import Name from '@/components/name'

export default function Home({ name }: { name: string }) {
  return (
    <div>
      Welcome, <Name name={name} />
      <br />
      <br />
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query name {
        name
      }
    `,
  })

  return {
    props: {
      name: data.name,
    },
  }
}
