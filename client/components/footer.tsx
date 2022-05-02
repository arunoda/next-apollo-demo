import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { Fragment } from "react";

const Footer = (pageProps: any) => {
    const { total, current } = pageProps;
    return (
        <Fragment>
            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={6} sm={6} md={6} >
                    <Alert severity="info">
                        Showing <strong>{current}</strong> of <strong>{total}</strong> records. Click on + button to add more records.
                    </Alert>
                </Grid>
            </Grid>
        </Fragment >
    )
}

export default Footer
