import { Suspense } from "react";

import { gql } from "@apollo/client";
import { getClient } from "../lib/apollo-client";

import EmployeesList from "../components/EmployeesList";
import LoadingCard from "../components/LoadingCard";

export default async function Page() {
  const { data } = await getClient().query({
    query: gql`
      query GetEmployees($skip: Int!, $limit: Int!) {
        employees(skip: $skip, limit: $limit) {
          id
          firstName
          lastName
          email
          phoneNumber
          address {
            streetAddress
            city
          }
        }
      }
    `,
    variables: {
      skip: 10,
      limit: 10,
    },
  });

  return (
    <main>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        }
      >
        <EmployeesList />
      </Suspense>
    </main>
  );
}
