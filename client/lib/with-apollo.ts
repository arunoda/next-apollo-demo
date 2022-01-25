// import { withData } from 'next-apollo'
import { HttpLink } from '@apollo/client'

const apolloConfig = {
  link: new HttpLink({
    uri: 'https://faker-graphql.now.sh/graphql'
  })
}

export default apolloConfig
