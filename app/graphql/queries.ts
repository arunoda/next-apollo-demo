import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query Users ($offset: Int, $limit: Int) {
    users (offset: $offset, limit: $limit){
      id
      name {
        firstName
        lastName
      }
      phone {
        countryCode
        number
      }
      address {
        building
        street      
        city
        region
        country
        postCode
      }
    }
  }
`
