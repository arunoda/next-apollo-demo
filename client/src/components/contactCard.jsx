import React from 'react';
import PropsType from 'prop-types';
import { makeStyles, Paper, ListItem, ListItemAvatar, Avatar, List, ListItemText } from '@material-ui/core';

import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    // minWidth: 288,
  },
}));

export default function ContactCard({ name, address, email, phone }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={address} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={phone} />
        </ListItem>
      </List>
    </Paper>
  );
}
ContactCard.propTypes = {
  name: PropsType.string.isRequired,
  address: PropsType.string.isRequired,
  email: PropsType.string.isRequired,
  phone: PropsType.string.isRequired,
};
