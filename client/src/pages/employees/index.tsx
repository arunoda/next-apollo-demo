import React, { useState } from "react";
import { gql } from "@apollo/client";
import { client } from "../../../lib/apollo-client";
import Head from "next/head";
import { Employee } from "../../entities/employee";
import TeamCard from "../../components/team-card";
import Button from "../../components/button";
import Header from "../../components/header";

interface EmployeesPageProps {
  data: {
    employees: Employee[];
  };
}

const Employees: React.FC<EmployeesPageProps> = ({ data }) => {
  const [loadMoreLimit, setLoadMoreLimit] = useState<number>(20);
  const { employees } = data;

  const handleOnClick = () => {
    setLoadMoreLimit((current) => current + 20);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {employees.slice(0, loadMoreLimit).map((employee: Employee) => {
            return (
              <div key={employee.id}>
                <TeamCard employee={employee} />
              </div>
            );
          })}
        </div>
        <Button
          label="Load More"
          className="bg-blue-500 rounded-full text-white px-8 py-4 hover:bg-blue-700 hover:animate-pulse"
          onClick={handleOnClick}
        />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const employees = gql`
    query {
      employees {
        id
        firstName
        lastName
        email
        phoneNumber
        address {
          city
          firstLine
          street
        }
      }
    }
  `;

  const { data } = await client.query({ query: employees });

  return { props: { data } };
};

export default Employees;
