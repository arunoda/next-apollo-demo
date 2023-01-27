import { render, screen } from '@testing-library/react'
import Home, { getNameQuery } from '@/pages/index'
import { MockedProvider } from '@apollo/client/testing'

describe('Home', () => {
  const mocks = [
    {
      request: {
        query: getNameQuery,
      },
      result: {
        data: {
          name: 'Spencer',
        },
      },
    },
  ]

  it('renders without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home name="Spencer" />
      </MockedProvider>
    )
    const welcomeText = screen.getByTestId('welcome-text')
    expect(welcomeText).toHaveTextContent('Welcome, Spencer')
  })
})
