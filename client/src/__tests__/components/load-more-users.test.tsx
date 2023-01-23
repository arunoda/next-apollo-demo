import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import LoadMoreUsers from '@/components/load-more-users'
import { gql } from '@apollo/client'

const getUsersQuery = gql`
  query users($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset) {
      name
      email
      phoneNumber
      address {
        street
        city
        zipCode
      }
    }
  }
`

describe('Load more users', () => {
  const mocks = [
    {
      request: {
        query: getUsersQuery,
      },
      result: {
        data: {
          users: [
            {
              name: 'Marta Kuhn',
              email: 'Wilmer34@hotmail.com',
              phoneNumber: '640.512.6044 x207',
              address: {
                street: 'Marilou Mills',
                city: 'West Sacramento',
                zipCode: '66473',
              },
            },
          ],
        },
      },
    },
  ]

  it('renders without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoadMoreUsers users={mocks[0].result.data.users} />
      </MockedProvider>
    )
    const userText = screen.getByTestId('user-info-0')
    expect(userText).toHaveTextContent(
      'Marta Kuhn Wilmer34@hotmail.com 640.512.6044 x207'
    )
  })
})
