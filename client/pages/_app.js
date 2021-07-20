import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../graphql/client';

function MyApp({ Component, pageProps }) {
    return <ApolloProvider client={client}><Container fluid>
    <Component {...pageProps} />
    </Container></ApolloProvider>
  }
  

  
  export default MyApp