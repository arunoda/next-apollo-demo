import Head from "next/head";
import React from "react";
// import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Names from "../components/Names";

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Names</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 data-testid="heading" style={{ textAlign: "center" }}>Names & addresses</h1>
        <ClientOnly>
          <Names />
        </ClientOnly>
      </main>
    </div>
  );
}
