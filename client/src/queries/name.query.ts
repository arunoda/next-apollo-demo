import { gql } from '@apollo/client'

export const getNameQuery = gql`
  query name {
    name
  }
`
