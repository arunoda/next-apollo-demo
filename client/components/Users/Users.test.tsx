import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users from './Users';

test('Users component returns user-list when loaded', () => {
  const { getByTestId } = render(<Users />);
  const userListElement = getByTestId('user-list');
  expect(userListElement).toBeInTheDocument();
});
