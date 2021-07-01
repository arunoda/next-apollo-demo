/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Container,
  Grid,
  Button,
  makeStyles,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Typography,
  InputAdornment,
  Backdrop,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { MemoContactCard } from '../components/contactCard';

import { GET_PERSONS_QUERY } from '../query/persons';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function ContactList() {
  const limit = 9;
  const offset = 0;
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [moreData, setMoreData] = React.useState(true);

  const {
    loading,
    error,
    fetchMore,
    data = { persons: [] },
  } = useQuery(GET_PERSONS_QUERY, {
    variables: { limit, offset },
    notifyOnNetworkStatusChange: true,
    onError: () => {
      setOpenDialog(true);
    },
  });

  const filteredContactsData = data.persons.filter(ele => ele.name.match(searchQuery));

  const handleLoadMore = async () => {
    try {
      const { data: newData } = await fetchMore({ variables: { offset: data.persons.length } });

      // disable loading more button condition
      if (newData.persons.length < limit) {
        setMoreData(false);
      }
    } catch (newError) {
      setOpenDialog(error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearch = event => {
    const inputValue = event.target.value;
    if (inputValue.length > 2) {
      setSearchQuery(event.target.value);
    } else {
      setSearchQuery('');
    }
  };

  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress data-testid="loading-spinner" />
      </Backdrop>
      <Container data-testid="contact-list">
        <div className={classes.wrapper}>
          <TextField
            variant="outlined"
            placeholder="Search"
            onChange={handleSearch}
            inputProps={{ 'data-testid': 'contact-search' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Grid container spacing={3}>
          {filteredContactsData.map(ele => (
            <Grid key={ele.id} item xs sm={6} md={4}>
              <MemoContactCard {...ele} data-testid="contact-card" />
            </Grid>
          ))}
        </Grid>

        {filteredContactsData.length === 0 && !loading && (
          <div className={classes.wrapper}>
            <Typography variant="h6" data-testid="contact-missing">
              Nothing found
            </Typography>
          </div>
        )}

        <div className={classes.wrapper}>
          {moreData && (
            <Button
              data-testid="loading-button"
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          )}
        </div>
      </Container>
      <Dialog open={openDialog} onClose={handleCloseDialog} data-testid="error-dialog">
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Oops! Something went wrong! Help us improve your experience by sending an error report
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
