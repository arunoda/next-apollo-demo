import ApolloRequestClientProvider from '../lib/ApolloRequestClient'
import '../sass-styling/main.scss'

function MyApp({ Component, pageProps }) {
    return <ApolloRequestClientProvider>
        <Component {...pageProps} />
    </ApolloRequestClientProvider>
}

export default MyApp