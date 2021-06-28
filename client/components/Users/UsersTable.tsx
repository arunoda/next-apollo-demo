import { UserCard } from "./UserCard";
import React from "react";

type users = Array<{
    name: string;
    phone: string;
    email: string;
    address: string;
}>;

export const UsersTable = (props: { loading: boolean; users: users }) => (
    <>
        {props.users.map((user, index) => (
            <UserCard user={user} key={index} />
        ))}
    </>
);
