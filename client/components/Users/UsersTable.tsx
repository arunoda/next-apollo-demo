import { UserCard } from "./UserCard";
import React from "react";
import { user } from "./Types";

export const UsersTable = (props: { loading: boolean; users: Array<user> }) => (
    <>
        {props.users.map((user, index) => (
            <UserCard user={user} key={index} />
        ))}
    </>
);
