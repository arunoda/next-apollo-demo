import withApollo from '../lib/with-apollo'
import Head from 'next/head'

const Home = ({ Component, pageProps }) => (
 <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
)

export default withApollo({ ssr: true })(Home)
