import "../global.scss";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

const url = process.env.user_url;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      keyFields: [],
      fields: {
        users: {
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: url,
  cache: cache,
});

export default function MyApp({ Component, pageProps }) {
  const backToHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const router = useRouter();
  return (
    <>
      <div className="heading">
        {router.pathname !== "/" && (
          <span className="">
            <FiArrowLeft className="icon" onClick={backToHome} />
          </span>
        )}
        <h3>Welcome to JavaScript World</h3>
      </div>
      <div>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </div>
    </>
  );
}
