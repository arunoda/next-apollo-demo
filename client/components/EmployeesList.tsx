"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";
import EmployeeCard from "../components/EmployeeCard";

const GET_EMPLOYEES_QUERY = gql`
  query GetEmployees {
    employees(skip: 0, limit: 20) {
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
`;

const EmployeesList: React.FC<any> = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          email={employee.email}
          phoneNumber={employee.phoneNumber}
          address={{
            streetAddress: employee.address.streetAddress,
            city: employee.address.city,
          }}
        />
      ))}
    </div>
  );
};

export default EmployeesList;
