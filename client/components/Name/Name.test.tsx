import React from 'react';
import { useQuery } from "@apollo/client";
import { render } from '@testing-library/react';
import { Name } from './Name';

jest.mock('@apollo/client');

const mockUseQuery = useQuery as jest.MockedFunction<any>;

describe('Name', () => {

  beforeEach(() => {
    mockUseQuery.mockReturnValue({
      data: {
        name: "Name",
      }
    })
  })

  it('should match snapshot', () => {
    const { container } = render(<Name />);
    expect(container).toMatchSnapshot();
  })
})