import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const apolloConfig = {
  link: new HttpLink({
    uri: 'http://localhost:6000/graphql'
  })
}

export default withData(apolloConfig)
