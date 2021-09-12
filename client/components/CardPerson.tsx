import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

interface MyCardProps {
  name: string;
  address: string;
  email: string;
  phone: string;
  id: number;
}

export const CardPerson = ({ name, address, email, phone, id }: MyCardProps) => (
  <Card>
    <Box padding="8px" display="flex" flexDirection="column" justifyContent="center" alignContent="center">
      <Typography fontSize="12px" color="brown" fontFamily="Roboto" textAlign="center">
        {id}
      </Typography>
      <Typography fontSize="16px" color="black" fontFamily="Roboto" variant="h1" textAlign="center" fontWeight={700}>
        {name}
      </Typography>
      <Typography fontSize="14px" color="green" fontFamily="Roboto" variant="h2" textAlign="center">
        {address}
      </Typography>
      <Typography fontSize="12px" color="blue" fontFamily="Roboto" variant="h3" textAlign="center">
        {email}
      </Typography>
      <Typography fontSize="12px" color="red" fontFamily="Roboto" variant="subtitle1" textAlign="center">
        {phone}
      </Typography>
    </Box>
  </Card>
);
