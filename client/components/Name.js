import { gql, useQuery } from '@apollo/client'
const Component = () => {

  const query = gql`
    {
      user(id: 1) {
        id
        name
      }
    }
  `

  const { loading, error, data } = useQuery(query)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <span>
      {data.user.name}
    </span>
  )
}

export default Component