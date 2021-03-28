import {render} from '@testing-library/react';
import UserCard from '../components/UserCard';

describe('UserCard  component', () => {
  test('Renders correctly', () => {
    const {getByTestId} = render(<UserCard />);
    expect(getByTestId('user-card')).toBeInTheDocument();
  });
});
