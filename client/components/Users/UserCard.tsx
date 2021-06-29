import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { user } from "./Types";

interface UserCardProps {
    user: user;
}

export const UserCard = (props: UserCardProps) => (
    <Card style={{ backgroundColor: "beige" }}>
        <CardHeader title={props.user.name} />
        <CardContent>
            <Typography>{props.user.address}</Typography>
            <Typography>{props.user.phone}</Typography>
            <Typography>{props.user.email}</Typography>
        </CardContent>
    </Card>
);
