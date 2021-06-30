import React from "react";
import { gql, useQuery } from "@apollo/client";

type Response = {
    name: string;
};

const Name = () => {
    const { data, loading } = useQuery<Response>(query);

    return <span>{loading ? ".." : data?.name}</span>;
};

const query = gql`
    query name {
        name
    }
`;

export default Name;
