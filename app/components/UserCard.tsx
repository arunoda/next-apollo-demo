import { Grommet, grommet, Box, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import 'animate.css';

type UserCardProps = {
  content: User;
}

export const UserCard = ({ content }: UserCardProps): JSX.Element => {
  const { id, name, phone, address } = content;
  return (
       <Grommet theme={grommet}>
       <Box pad="large" gap="medium" width="medium" data-test-id="user-card">
         <Card pad="small" background="dark-1" gap="medium" className='animate__animated animate__pulse'>
          <CardHeader>{`${name.firstName} ${name.lastName}`}</CardHeader>
          <CardBody>
            <p>{address.building}, {address.street}</p>
            <p>{address.city}, {address.region}</p>
            <p>{address.country}</p>
          </CardBody>
          <CardFooter>{phone.countryCode} {phone.number}</CardFooter>
        </Card>
        </Box>
      </Grommet>
  )
}


