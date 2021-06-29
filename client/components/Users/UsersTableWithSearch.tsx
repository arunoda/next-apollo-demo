import React from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./UsersTableWithSearch.module.css";
import { TextField } from "@material-ui/core";
import { debounce } from "../../utils";
import { UsersTable } from "./UsersTable";
import { user } from "./Types";

const UsersTableWithSearch = () => {
    const { data, loading } = useQuery<Response>(query);
    const [filteredData, setFilteredData] = React.useState<Array<user>>(null);

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
    users: Array<user>;
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

export default UsersTableWithSearch;
