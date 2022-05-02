import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Person from '../components/person';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Apollo Demo</title>
        <meta name="description" content="Next Apollo Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FolderIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Person Data (Nextjs App with Apollo)
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Person />
      </main>
    </div >
  )
}

export default Home
