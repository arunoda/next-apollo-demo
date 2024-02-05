"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_EMPLOYEES_QUERY } from "../../gql/GetEmployees";

import LoadingCard from "../LoadingCard";
import EmployeeCard from "../EmployeeCard";
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 21;

const LoadingState = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <Pagination isFirstPage={true} isLastPage={true} handlePrev={() => null} handleNext={() => null} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
};

const EmployeesList = () => {
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_EMPLOYEES_QUERY, {
    variables: {
      skip: page * ITEMS_PER_PAGE,
      limit: ITEMS_PER_PAGE,
    },
  });

  // Assuming you don't know the total number of employees,
  // Check if the current page has less items than ITEMS_PER_PAGE to infer it's the last page.
  const isFirstPage = page === 0;
  const isLastPage = data && data.employees.length < ITEMS_PER_PAGE;

  if (loading) return <LoadingState />;
  if (error) return <div>Error! {error.message}</div>;

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        handlePrev={() => handlePrev()}
        handleNext={() => handleNext()}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        handlePrev={() => handlePrev()}
        handleNext={() => handleNext()}
      />
    </div>
  );
};

export default EmployeesList;
