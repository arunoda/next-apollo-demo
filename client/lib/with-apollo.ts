import { HttpLink } from '@apollo/client'

const apolloConfig = {
  link: new HttpLink({
    uri: '/graphql'
  })
}

export default apolloConfig
