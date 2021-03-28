import loadable from '@loadable/component';
import Head from 'next/head';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

import Layout from '../components/Layout';
import Grid from '../components/Grid';
import UserCard from '../components/UserCard';

// Lazyload
// const UserCard = loadable(() => import('../components/UserCard'));

const Users = ({users}) => {
  return (
    <>
      <Head>
        <title>NextGraphQlApollo | Users</title>
      </Head>

      <Layout>
        <h1>User Details</h1>

        <Grid>
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                firstname={user.firstname}
                lastname={user.lastname}
                address={user.address}
                email={user.email}
                phone={user.phone}
              />
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};

export default Users;

export async function getServerSideProps() {
  const client = new ApolloClient({
    // server uri
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
      query GET_USER_DETAILS {
        users {
          id
          firstname
          lastname
          address
          email
          phone
        }
      }
    `,
  });

  //console.log('users-staticProps:::', data);

  return {
    props: {
      users: data.users,
    },
  };
}
