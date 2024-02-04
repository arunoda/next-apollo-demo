"use server";

import EmployeesList from "../components/EmployeesList";

export default async function Page() {
  return (
    <main>
      <EmployeesList />
    </main>
  );
}
