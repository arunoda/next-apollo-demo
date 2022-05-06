import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Client from './Client';

test('Client component returns client element when loaded', () => {
  const { getByTestId } = render(
    <Client>
      <div>Test</div>
    </Client>
  );
  const clientElement = getByTestId('client');
  expect(clientElement).toBeInTheDocument();
  expect(clientElement).toHaveTextContent('Test');
});
