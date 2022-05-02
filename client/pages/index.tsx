import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { navLinks } from "../utils/navdata";
import ResponsiveGrid from './fetchData';
import Person from './person';
import Paper from '@mui/material/Paper';
import { Pagination, Stack } from "@mui/material";
import { useState } from 'react';
const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Apollo Demo</title>
        <meta name="description" content="Next Apollo Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Person />
      </main>
      <footer className={styles.footer}>
        <Pagination count={10} variant="outlined" color="primary" />
      </footer>
    </div >
  )
}

export default Home
