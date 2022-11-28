/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users from './Users';

const props = {
  userlist: [{
    address: '304 Emery Junctions Apt. 837\nNew Amelyside, KS 30415-7338', phoneNumber: '058-718-7034', email: 'Sheila.Kemmer@Yundt.us', name: 'Ms. Maverick Balistreri',
  }],
  loading: false,
  error: '',
  next: false,
  handleLoadMore: () => {},
};

test('Users component returns list of users when loaded', () => {
  const { getByTestId } = render(<Users {...props} />);
  const userListElement = getByTestId('user-list');
  expect(userListElement).toBeInTheDocument();
});
