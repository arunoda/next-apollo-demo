import {render} from '@testing-library/react';
import Users from '../pages/users';

describe('Users  component', () => {
  test('Renders correctly', () => {
    render(<Users />);
    expect(Users).toBeTruthy();
  });
});
