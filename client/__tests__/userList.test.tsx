import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import UserList from '../pages/user-list';
import { userMocks } from '../lib/constant';

describe('UserList', () => {
  it('renders UserList with API data', async () => {
    const { getByText } = render(
      <MockedProvider mocks={userMocks} addTypename={false}>
        <UserList />
      </MockedProvider>
    );
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });
    expect(getByText('Load More')).toBeInTheDocument();
  });
});
