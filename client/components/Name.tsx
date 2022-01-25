import { graphql } from 'react-apollo'
import {gql} from '@apollo/client'

const Component = ({ data }) => (
  <span>
    {data.loading? '..' : data.name}
  </span>
)

const query = gql`
  query name {
    name
  }
`

export default graphql(query)(Component)
