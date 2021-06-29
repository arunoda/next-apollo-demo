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

import { getPersonsQuery } from '../api/persons';

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

  const filteredContactsData = contactsData.filter(ele => ele.name.match(searchQuery));

  const { loading } = useQuery(getPersonsQuery, {
    variables,
    onCompleted: data => {
      setContacts(prev => [...prev, ...data.persons]);
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
      <Container>
        <div className={classes.wrapper}>
          <TextField
            variant="outlined"
            placeholder="Search"
            onChange={handleSearch}
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
              <ContactCard {...ele} />
            </Grid>
          ))}
        </Grid>

        {filteredContactsData.length === 0 && (
          <div className={classes.wrapper}>
            <Typography variant="h6">Nothing found</Typography>
          </div>
        )}

        <div className={classes.wrapper}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" size="large" color="secondary" onClick={handleLoadMore}>
              Load more
            </Button>
          )}
        </div>
      </Container>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
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
