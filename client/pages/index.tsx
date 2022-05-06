import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/home.module.css';

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next GraphQL Apollo Demo</title>
        <meta name="description" content="Next Apollo Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.tileCard}>
        Welcome to Next GraphQL Apollo Demo: User List
      </h1>
      <div>
        <ul className={styles.linkList}>
          <li className={styles.individualList}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.individualList}>
            <Link href="/user-list">
              <a>User List</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
