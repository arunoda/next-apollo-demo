import { HttpLink } from '@apollo/client'

//graphql and faker uri

const apolloConfig = {
  link: new HttpLink({
    uri: 'https://faker-graphql.now.sh/graphql'
  })
}

export default apolloConfig
