import React from "react";
import Link from "next/link";
import UsersTable from "../components/UsersTable";
import WithApollo from "../lib/with-apollo";

const Users = () => (
    <div>
        <UsersTable />
        <Link href="/">
            <a>Go Back</a>
        </Link>
    </div>
);

export default WithApollo({ ssr: true })(Users);
