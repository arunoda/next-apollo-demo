import Link from 'next/link'
import client from '@/lib/apollo-client'
import { ApolloProvider } from '@apollo/client'
import { User } from '@/types/auto-generated'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import LoadMoreUsers from '@/components/load-more-users'
import { getUsersQuery } from '@/queries/users.query'

interface Props {
  users: User[]
}
export default function Users({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ApolloProvider client={client}>
      <div>
        Users Page
        <br />
        <br />
        <LoadMoreUsers users={users} />
        <Link href="/">Go Back</Link>
      </div>
    </ApolloProvider>
  )
}

export const getServerSideProps: GetServerSideProps<{ users: User[] }> = async (
  context
) => {
  const { data } = await client.query({
    query: getUsersQuery,
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  return {
    props: {
      users: data.users,
    },
  }
}
