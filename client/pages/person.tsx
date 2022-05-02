import { gql, useQuery } from "@apollo/client";
import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import stringToColor from "../utils/color"
import { Fab } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { green } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import { Fragment } from "react";
import Tooltip from '@mui/material/Tooltip';

const Person = () => {
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
    const { data, loading, error, fetchMore } = useQuery(ITEMS_QUERY, { variables: { first: 20 } });
    const getInitials = (name: string) => {
        return name.split(" ").slice(1).map(i => i[0]).join("");
    }
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error :(</p>);
    const nodes = data.items.edges.map((edge: any) => edge.node);
    const pageInfo = data.items.pageInfo;
    const loadMore = () => {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    cursor: pageInfo.endCursor,
                },
            });
        }
    }
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                    {nodes.map((person: any, index: number) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <ListItem sx={{ bgcolor: 'background.paper', height: "100%" }} button key={index}>
                                <ListItemAvatar>
                                    <Avatar {...{ sx: { bgcolor: stringToColor(person.name) } }} alt={person.name}>{getInitials(person.name)}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={person.name} secondary={person.address} />
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
                <Tooltip title="Click to get more records" arrow>
                    <Fab sx={fabGreenStyle} color="primary" aria-label="add" onClick={() => { loadMore() }}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </Box >
        </Fragment>
    )
}

export default Person
