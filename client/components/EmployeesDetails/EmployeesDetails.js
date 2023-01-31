import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Employees from "./Employees/Employees";
import styles from "./EmployeesDetails.module.css";

const EmployeesDetails = ({ employees }) => {
  const [employeesData, setEmployeesData] = useState(employees);
  const [loadMore, setLoadMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const query = gql`
    query Employees($limit: Int!, $offset: Int!) {
      employees(limit: $limit, offset: $offset) {
        name
        email
        phone
        address
      }
    }
  `;
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: { limit: limit, offset: offset },
  });
  if (error) return `Error! ${error.message}`;

  if (loading) return <div>Loading ...</div>;

  if (data && loadMore) {
    setLoadMore(false);
    setEmployeesData(employeesData.concat(data.employees));
  }

  const handleLoadMore = () => {
    setLoadMore(true);
    setOffset(offset + limit);

    try {
      fetchMore({
        variables: {
          limit: limit,
          offset: offset,
        },
      });
    } catch (err) {
      console.log(`Error! ${err.message}`);
    }
  };

  return (
    <>
      <Employees employees={employeesData} />
      <div className={styles.load_more}>
        <button className={styles.load_more_button} onClick={handleLoadMore}>
          Load more
        </button>
        <div className={styles.load_more_text}>
          (Showing {employeesData.length} of 2000)
        </div>
      </div>
    </>
  );
};
export default EmployeesDetails;
