import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query Users() {
    hello {
      id
      name
    }
  }
  query Posts($limit, $offset){
    posts($limit, $offset){
      id,
      address,
      email,
      phoneNumber,
    }
  }
`
