import React from 'react';
import {render} from '@testing-library/react';
import Index from '../pages/index';

test('Renders Home component correctly', () => {
  render(<Index />);
  expect(Index).toBeTruthy();
});
