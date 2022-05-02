import { useQuery } from "@apollo/client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Fab, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import { Fragment } from "react";
import { fabStyle, stringToColor } from "../utils/color";
import { ITEMS_QUERY } from "../pages/api/schema";
import { getInitials } from "../utils/utilFunc";
import Footer from "./footer"
const Person = () => {
    const { data, loading, error, fetchMore } = useQuery(ITEMS_QUERY, { variables: { first: 20 } });

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error :(</p>);

    const nodes = data.items.edges.map((edge: any) => edge.node);
    const pageInfo = data.items.pageInfo;
    const totalCount = data.items.totalCount;

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
            <Box sx={{ flexGrow: 1, padding: "2rem 0", maxHeight: "80vh", overflowY: "auto", bgcolor: "#E7EBF0" }}>
                <CssBaseline />
                <Grid container spacing={{ xs: 2, md: 2 }}>
                    {nodes.map((person: any, index: number) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ListItem alignItems="flex-start" sx={{ bgcolor: 'background.paper', height: "100%" }} button key={index}>
                                <ListItemAvatar>
                                    <Avatar {...{ sx: { bgcolor: stringToColor(person.name) } }} alt={person.name}>{getInitials(person.name)}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={person.name} secondary={
                                    <Fragment>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            <strong>Address:</strong> {person.address}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            <strong>Email:</strong> {person.email}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            <strong>Phone:</strong> {person.phone}
                                        </Typography>
                                    </Fragment>
                                } />
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
                <Fab variant="extended" sx={fabStyle} size="medium" color="primary" aria-label="add" onClick={() => { loadMore() }}>
                    <AddIcon sx={{ mr: 1 }} /> Load More Profiles
                </Fab>
            </Box >
            <Footer total={totalCount} current={nodes.length} />
        </Fragment >
    )
}

export default Person
