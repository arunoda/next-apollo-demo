import React from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./UsersTableWithSearch.module.css";
import { TextField, Typography } from "@material-ui/core";
import { debounce } from "../../utils";
import { UsersTable } from "./UsersTable";
import { user } from "./Types";

const UsersTableWithSearch = () => {
    const { data, loading } = useQuery<Response>(query);
    const [filteredData, setFilteredData] = React.useState<Array<user>>(null);

    return (
        <div>
            <div className={styles["users-search"]}>
                <TextField
                    label="search user"
                    placeholder="search user"
                    variant="outlined"
                    onChange={(e) => {
                        const debouncedSearch = debounce(setFilteredData, 300);
                        debouncedSearch(
                            data.users.filter((user) =>
                                user.name
                                    .toLocaleLowerCase()
                                    .includes(
                                        e.target.value.toLocaleLowerCase(),
                                    ),
                            ),
                        );
                    }}
                />
                {filteredData && (
                    <Typography>{filteredData.length} users</Typography>
                )}
            </div>
            <div>
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

export const query = gql`
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
