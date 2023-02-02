import ApolloRequestClientProvider from '../lib/ApolloRequestClient'
import './styles/main.scss'
import './styles/variables.scss'

function MyApp({ Component, pageProps }) {
    return <ApolloRequestClientProvider>
        <Component {...pageProps} />
    </ApolloRequestClientProvider>
}

export default MyApp