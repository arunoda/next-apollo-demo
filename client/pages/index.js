import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>NextGraphQlApollo | Home</title>
      </Head>

      <Layout>
        <h1>Home</h1>

        <div>
          <Link href="/users">Go to user details</Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
