import React from "react";
import Link from "next/link";
import UsersTableWithSearch from "../components/Users/UsersTableWithSearch";
import WithApollo from "../lib/with-apollo";

const Users = () => (
    <div>
        <UsersTableWithSearch />
        <Link href="/">
            <a>Go Back</a>
        </Link>
    </div>
);

export default WithApollo({ ssr: true })(Users);
