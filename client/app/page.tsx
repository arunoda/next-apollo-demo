"use server";

import { Suspense } from "react";
import EmployeesList from "../components/EmployeesList";
import LoadingCard from "../components/LoadingCard";

export default async function Page() {
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
