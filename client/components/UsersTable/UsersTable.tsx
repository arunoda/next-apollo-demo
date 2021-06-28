import React from "react";
import { gql, useQuery } from "@apollo/client";
import { UserCard } from "./UserCard";
import styles from "./UsersTable.module.css"

const UsersTable = () => {
    const { data, loading } = useQuery<Response>(query);

    return (
        <div className={styles["users-table"]}>
            {loading ? (
                <>loading...</>
            ) : (
                data.users.map((user, index) => (
                    <UserCard user={user} key={index} />
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
    }>;
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
