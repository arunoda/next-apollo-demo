import { UserCard } from "./UserCard";
import React from "react";
import { user } from "./Types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, IconButton, Typography } from "@material-ui/core";
import styles from "./UsersTableWithSearch.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const PAGE_SIZE = 24;

export const UsersTable = (props: { loading: boolean; users: Array<user> }) => {
    const [dataLength, setDataLength] = React.useState<number>(PAGE_SIZE);
    const [hasMore, setHasMore] = React.useState<boolean>(false);

    React.useEffect(() => {
        setDataLength(20);
    }, [props.users]);

    const nextScroll = () => {
        setDataLength(dataLength + PAGE_SIZE);
        setHasMore(false);
    };

    return (
        <>
            <InfiniteScroll
                dataLength={dataLength}
                loader={<Typography>Loading...</Typography>}
                hasMore={hasMore}
                next={nextScroll}
                scrollThreshold={1}
                endMessage={
                    props.users.length > dataLength && (
                        <Button
                            variant="outlined"
                            onClick={() => setHasMore(true)}
                            style={{ width: "100%", backgroundColor: "beige" }}
                        >
                            Load more
                        </Button>
                    )
                }
                className={styles["users-table"]}
            >
                {props.users.slice(0, dataLength).map((user, index) => (
                    <UserCard user={user} key={index} />
                ))}
            </InfiniteScroll>
            <IconButton
                onClick={() => {
                    window.scrollTo(0, 0);
                    setDataLength(20);
                }}
                style={{
                    position: "fixed",
                    right: 10,
                    bottom: 10,
                    backgroundColor: "aliceblue",
                }}
            >
                <ArrowUpwardIcon />
            </IconButton>
        </>
    );
};
