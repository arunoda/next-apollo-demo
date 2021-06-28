import React from "react";
import { gql, useQuery } from "@apollo/client";

const UsersTable = () => {
    const { data, loading } = useQuery<Response>(query);

    return (
        <div>
            {loading ? (
                <>loading...</>
            ) : (
                data.users?.map((user) => (
                    <div>
                        <span>{user.name}</span>
                        <span>{user.address}</span>
                        <span>{user.phone}</span>
                        <span>{user.address}</span>
                    </div>
                ))
            )}
        </div>
    );
};

type Response = {
    users: Array<{
        name: string;
        phone: string;
        email: string;
        address: string;
    }>
};

const query = gql`
query users {
  users {
    name
    phone
    email
    address
  }
}
`;

export default UsersTable;
