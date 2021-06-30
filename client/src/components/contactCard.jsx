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
    <Paper className={classes.root} data-testid="contact-card">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText data-testid="contact-name" primary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText data-testid="contact-address" primary={address} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText data-testid="contact-email" primary={email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText data-testid="contact-phone" primary={phone} />
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
