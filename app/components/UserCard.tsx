import { Grommet, grommet, Box, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import 'animate.css';

type UserCardProps = {
  content: User;
}

export const UserCard = ({ content }: UserCardProps): JSX.Element => {
  const { id, name, phone, address } = content;
  return (
      <Grommet theme={grommet}>
      <Box pad="large" gap="medium" width="medium">
        <Card data-testid="user-card" pad="small" background="dark-1" gap="medium" className='animate__animated animate__fadeInDown'>
        <CardHeader data-testid="user-card-header">{`${name.firstName} ${name.lastName}`}</CardHeader>
        <CardBody data-testid="user-card-body">
          <p>{address.building}, {address.street}</p>
          <p>{address.city}, {address.region}</p>
          <p>{address.country}</p>
        </CardBody>
        <CardFooter data-testid="user-card-footer">{phone.countryCode} {phone.number}</CardFooter>
      </Card>
      </Box>
    </Grommet>
  )
}


