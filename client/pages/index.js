import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import EmployeesDetails from '../components/EmployeesDetails/EmployeesDetails';
import { ApolloProvider } from "@apollo/client";

export default function App({ employees }) {  
  return(
    <ApolloProvider client={client}>
        <EmployeesDetails employees={employees}/>
    </ApolloProvider>    
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Employees {
        employees(limit: 20, offset: 0) {
          name
          email
          phone
          address    
        }
      }
    `,
  });
  
  return {
    props: {
      employees: data.employees
    },
 };
}