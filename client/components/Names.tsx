
import { useQuery, gql } from "@apollo/client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const GET_USERS = gql`
  query Query($first: Int, $after: String) {
  users(first: $first, after: $after) {
    edges {
      cursor
      node {
        fullName
        address
        emailAddress
        phoneNumber
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

export default function Names() {

    // const [data, setData] = React.useState()

    const { data, loading, error, fetchMore } = useQuery(GET_USERS, {
        variables: { first: 20 },
        notifyOnNetworkStatusChange: true,
    });

    if (loading) {
        return (
            <h2>Loading Data...</h2>
        );
    };

    if (error) {
        console.error(error);
        console.log(error)
        return (
            <h2>Sorry, there&apos;s been an error...</h2>
        );
    };

    const first = 20;

    return (
        <>
            <Grid data-testid="grid" container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.users.edges.map((info) => (
                    <Grid item xs={2} sm={4} md={4} key={info.node.fullName + info.node.phoneNumber}>
                        <Card sx={{ maxWidth: 275, mb: 3, ml: 3, color: "white", background: "grey" }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {info.node.fullName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {info.node.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {data.users.pageInfo.hasNextPage && <Button
                onClick={() => {
                    fetchMore({
                        variables: {
                            first,
                            after: data.users.pageInfo.endCursor,
                        },
                    })
                }}
            >
                Load more
            </Button>}
        </>
    )
}