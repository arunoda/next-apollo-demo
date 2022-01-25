import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import UserList from '../pages/user-list';
import { userMocks, QUERY, errMessage } from '../lib/constant';

describe('UserList', () => {
  it('renders UserList with API data', async() => {
    const { getByText } = render(
        <MockedProvider mocks={userMocks} addTypename={false}>
            <UserList />
        </MockedProvider>
    );
    await act(async()=> {
        await new Promise(resolve => setTimeout(resolve, 300));
    })
    expect(getByText('Load More')).toBeInTheDocument();
  })
  it('renders UserList with API in loading state', async() => {
    const { getByText } = render(
        <MockedProvider mocks={[]} addTypename={true}>
            <UserList />
        </MockedProvider>
    );
    expect(getByText('Loading ...')).toBeInTheDocument();
    await act(async()=> {
        await new Promise(resolve => setTimeout(resolve, 300));
    })
  })
  it('renders UserList with API throwing error', async() => {
    const errorMock = {
        request: {
          query: QUERY,
          variables: { count: 10 },
        },
        error: new Error('An error occurred'),
      };
    const { getByText } = render(
        <MockedProvider mocks={[errorMock]}>
            <UserList />
        </MockedProvider>
    );
    await act(async()=> {
        await new Promise(resolve => setTimeout(resolve, 300));
    })
    expect(getByText(errMessage)).toBeInTheDocument();
  })
})