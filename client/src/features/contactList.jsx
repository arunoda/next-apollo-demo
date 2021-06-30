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
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import ContactCard from '../components/contactCard';

import { GET_PERSONS_QUERY } from '../query/persons';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function ContactList() {
  const classes = useStyles();
  const [variables, setVariables] = React.useState({ limit: 10, offset: 1 });
  const [contactsData, setContacts] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [moreData, setMoreData] = React.useState(true);

  const filteredContactsData = contactsData.filter(ele => ele.name.match(searchQuery));

  const { loading, error } = useQuery(GET_PERSONS_QUERY, {
    variables,
    onCompleted: ({ persons }) => {
      setContacts(prev => [...prev, ...persons]);
      if (persons.length < variables.limit) {
        setMoreData(false);
      }
    },

    onError: () => {
      setOpenDialog(true);
    },
  });

  const handleLoadMore = () => {
    setVariables({ ...variables, offset: variables.offset + 1 });
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

  // React.useEffect(() => {
  //   if (!loading) {
  //     setPersonsData(prevState => [...prevState, ...data.persons]);
  //   }
  // }, [data, loading]);

  return (
    <>
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
          {filteredContactsData.map((ele, index) => (
            <Grid key={index} item xs sm={6} md={4}>
              <ContactCard {...ele} data-testid="contact-card" />
            </Grid>
          ))}
        </Grid>

        {filteredContactsData.length === 0 && !error && (
          <div className={classes.wrapper}>
            <Typography variant="h6" data-testid="contact-missing">
              Nothing found
            </Typography>
          </div>
        )}

        <div className={classes.wrapper}>
          {loading ? (
            <CircularProgress data-testid="loading-spinner" />
          ) : (
            moreData && (
              <Button
                data-testid="loading-button"
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleLoadMore}
              >
                Load more
              </Button>
            )
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
