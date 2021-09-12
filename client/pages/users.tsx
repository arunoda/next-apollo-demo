import gql from 'graphql-tag'
import { Grid, Typography } from '@material-ui/core'
import { UserTile } from '../components'
import { User } from '../components/UserTile'
import { useQuery } from '@apollo/react-hooks'

interface UsersResponse {
  users: User[]
}

export default (): JSX.Element => {
  const { loading, data, error } = useQuery<UsersResponse>(GET_USERS);

  return (
    <span>
      <Typography variant={'h3'}>Users</Typography>
      <Grid container>
        {loading ? '...' : data?.users.map(item => (
          <Grid container item xs={12} md={6} lg={4} xl={3} justifyContent={"center"}>
            <UserTile {...item} />
          </Grid>
        ))}
      </Grid>
    </span>
  );
}

const GET_USERS = gql`
  query users {
    users {
      name
      address {
        country
        city
        zip
        street
        address
        address1
        address2
      }
      email
      phoneNumber
    }
  }
`
