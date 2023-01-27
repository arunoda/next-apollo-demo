import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <h1 className="mb-3">About Page</h1>
        <Link href="/">Go Back</Link>
      </Layout>
    </>
  )
}
