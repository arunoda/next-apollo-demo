import { gql, useQuery } from "@apollo/client";
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { bgcolor } from "@mui/system";
import stringToColor from "../utils/color"
import { Fab, Pagination, Stack } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { green } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
const Person: NextPage = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const fabGreenStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
        color: 'common.white',
        bgcolor: green[500],
        '&:hover': {
            bgcolor: green[600],
        },
    };
    const Person_Data = gql`
            query PersonQuery {
                getPersons {
                name
                age
                address
                email
                phone
                }
            }
    `;
    const ITEMS_QUERY = gql`
            query Items($first: Int,$cursor: String) {
                items(first: $first, after: $cursor) {
                edges {
                    node {
                    name
                    address
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage                    
                }
                totalCount
                }
            }
            `;
    // const { loading, error, data, refetch } = useQuery(Person_Data);
    const { data, loading, error, fetchMore } = useQuery(ITEMS_QUERY, { variables: { first: 20 } });
    const getInitials = (name: string) => {
        return name.split(" ").slice(1).map(i => i[0]).join("");
    }
    const [page, setPage] = useState(0);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const nodes = data.items.edges.map((edge: any) => edge.node);
    const pageInfo = data.items.pageInfo;
    const currentCursor = data.items.pageInfo.endCursor;
    // const [page, setPage] = useState(1);
    // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    //     setPage(value);
    //     fetchMore({
    //         variables: {
    //             first: value * 20,
    //             cursor: pageInfo.endCursor,
    //         },
    //     });
    // };
    const loadMore = () => {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    cursor: pageInfo.endCursor,
                },
            });
        }
    }
    console.log(nodes);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {nodes.map((person: any, index: number) => (
                    <Grid item sm={3} md={3} key={index}>
                        {/* <Item> */}
                        <ListItem sx={{ bgcolor: 'background.paper', height: "100%" }} button key={index}>
                            <ListItemAvatar>
                                <Avatar {...{ sx: { bgcolor: stringToColor(person.name) } }} alt={person.name}>{getInitials(person.name)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={person.name} secondary={person.address} />
                        </ListItem>
                        {/* </Ite   m> */}
                    </Grid>
                ))}
            </Grid>
            <footer className={styles.footer}>
                {/* <Pagination count={Math.ceil(data.items.totalCount / 20)} variant="outlined" color="primary" onChange={handleChange} /> */}
            </footer>
            <Fab sx={fabGreenStyle} color="primary" aria-label="add" onClick={() => { loadMore() }}>
                <AddIcon />
            </Fab>
        </Box >
    )
}

export default Person
