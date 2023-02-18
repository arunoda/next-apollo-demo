import withApollo from '../lib/with-apollo'
import '../styles.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default withApollo({ssr: false})(MyApp)