import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_NAME } from "../../apollo/queries/getName";

export const Name = () => {
  const { data } = useQuery(GET_NAME);
  return <span>{data?.loading ? ".." : data?.name}</span>;
};
