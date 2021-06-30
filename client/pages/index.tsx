import React from "react";
import Link from "next/link";
import WithApollo from "../lib/with-apollo";
import Name from "../components/Name";

const Page = () => (
    <div>
        Welcome, <Name />
        <br />
        <br />
        <Link href="/about">
            <a>About</a>
        </Link>
        <br />
        <br />
        <Link href="/users">
            <a>Users list</a>
        </Link>
    </div>
);

export default WithApollo({ ssr: true })(Page);
