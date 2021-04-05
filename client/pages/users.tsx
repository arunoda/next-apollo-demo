import Head from 'next/head';
import Layout from '../components/Layout';
import ClientOnly from '../helpers/ClientOnly';
import UserList from '../components/UserList';

const Users = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Layout>
        <h1 data-test="page-title">User Details</h1>

        <ClientOnly>
          <UserList />
        </ClientOnly>
      </Layout>
    </>
  );
};

export default Users;
