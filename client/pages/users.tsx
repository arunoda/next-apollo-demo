import { useState } from 'react'
import gql from 'graphql-tag'
import { Grid, Typography, Button } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { UserTile } from '../components'
import { User } from '../components/UserTile'
import { useEffect } from 'react'

interface UsersResponse {
  users: User[]
}

export default (): JSX.Element => {
  const [offset, setOffset] = useState<number>(0)
  const { loading, data, fetchMore } = useQuery<UsersResponse>(GET_USERS, {
    variables: {
      offset: 0,
      limit: 20
    },
  });

  useEffect(() => {
    if (offset) {
      fetchMore({
        variables: {
          offset
        },
      })
    }
  }, [offset])

  const updateOffset = () => setOffset(offset + 20)

  return (
    <span>
      <Typography variant={'h3'}>Users</Typography>
      <Grid container>
        {loading ? '...' : data?.users.map(item => (
          <Grid container item xs={12} md={6} lg={4} xl={3} justifyContent="center">
            <UserTile {...item} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Button variant="contained" color="primary" onClick={updateOffset}>
          Load more
        </Button>
      </Grid>
    </span>
  );
}

const GET_USERS = gql`
  query users($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
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
