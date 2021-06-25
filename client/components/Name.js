import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client'

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
