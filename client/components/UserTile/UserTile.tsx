import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActions,
  CardContent,
  Button,
  Typography,
  Box
} from '@material-ui/core'

export interface User {
  name: string;
  address: {
    country: string;
    city: string;
    zip: string;
    street: string;
    address: string;
    address1: string;
    address2: string;
  }
  email: string;
  phoneNumber: string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 440,
  },
  fullWidth: {
    width: '100%'
  }
});

const UserTile = ({ name, email, address: {
  street,
  address,
  address1,
  address2,
  zip,
  city,
  country,
} }: User): JSX.Element => {
  const classes = useStyles()

  return (
    <Box p={2} className={classes.root}>
      <Card className={classes.fullWidth}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">
            {email}
          </Typography>
          <Typography variant="body2" component="p">
            {street}<br />
            {address}<br />
            {address1}<br />
            {address2}<br />
            {zip}<br />
            {city}<br />
            {country}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserTile
