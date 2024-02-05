import { Suspense } from "react";

import EmployeesList from "../components/EmployeesList";
import LoadingCard from "../components/LoadingCard";

import { GET_EMPLOYEES_QUERY } from "../gql/GetEmployees";

export default async function Page() {
  // const { data } = await getClient().query({
  //   query: GET_EMPLOYEES_QUERY,
  //   variables: {
  //     skip: 10,
  //     limit: 10,
  //   },
  // });

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
