import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Users from '../pages/users'
import { MockedProvider } from '@apollo/react-testing';
import { ALL_USERS } from '../queries/getUsers';


const mocks = [
    {
      request: {
        query: ALL_USERS,
        variables: {
            name: 'Mr. Reta Feeney'
          },
      },
      result: {
        data: {
            users: { name: 'Mr. Reta Feeney'},
        }
      }
    },
    {
      request: {
        query: ALL_USERS,
        variables: {
            name: 'xxxx'
          },
      },
      error: new Error(" An Error occured")
    }
  ]

const TestComponent = ()=>(
<MockedProvider addTypename={false} mocks={mocks}>
<Users/>
</MockedProvider>
)

describe('<Users/>', () => {
  it('should render the skeleton loader before displaying the users', () => {
    render(<TestComponent />)
    expect(screen.queryByTestId('skeleton-loader')).toBeInTheDocument();
  })
  it("should render list of user cards", async () => {
    render(<TestComponent />);
    await waitFor(()=> expect(screen.queryByTestId('user-grid')).toBeInTheDocument())
  });
})