import React from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./UsersTableWithSearch.module.css";
import { TextField } from "@material-ui/core";
import { debounce } from "../../utils";
import { UsersTable } from "./UsersTable";

const UsersTableWithSearch = () => {
    const { data, loading } = useQuery<Response>(query);
    const [filteredData, setFilteredData] = React.useState<users>(null);

    return (
        <div>
            <TextField
                label="search user"
                variant="outlined"
                onChange={(e) => {
                    const debouncedSearch = debounce(setFilteredData, 300);
                    debouncedSearch(
                        data.users.filter((user) =>
                            user.name
                                .toLocaleLowerCase()
                                .includes(e.target.value.toLocaleLowerCase()),
                        ),
                    );
                }}
            />
            <div className={styles["users-table"]}>
                {loading ? (
                    <>loading...</>
                ) : (
                    <UsersTable
                        loading={loading}
                        users={filteredData ? filteredData : data.users}
                    />
                )}
            </div>
        </div>
    );
};

type Response = {
    users: users;
};

type users = Array<{
    name: string;
    phone: string;
    email: string;
    address: string;
}>;

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

export default UsersTableWithSearch;
