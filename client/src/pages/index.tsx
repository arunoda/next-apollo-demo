import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Page: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>
        Welcome to GraphQL/Apollo
        {' '}
        <a href="">Demo</a>
      </h1>

      <p className={styles.description}>
        Get started by editing
        {' '}
        <code>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" target="_blank" className={styles.card} rel="noreferrer">
          <h3>About &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <Link href="/userinfo" className={styles.card}>

          <h3>Users &rarr;</h3>
          <p>Click to see the set of Users fetched &amp; displayed using Apollo/GraphQL/Next.js.</p>

        </Link>
      </div>
    </main>

    <footer />

    <style jsx>
      {`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}
    </style>

    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);

export default Page;
