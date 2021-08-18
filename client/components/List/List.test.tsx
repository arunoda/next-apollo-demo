import React from 'react';
import { act,render, fireEvent } from '@testing-library/react';
import { useLazyQuery } from "@apollo/client";
import { bigReponse } from '../../cypress/mock/mock';
import { List } from './List';

jest.mock('@apollo/client');

const mockUseLazyQuery = useLazyQuery as jest.MockedFunction<any>;
const getDetailsQuery = jest.fn();
const mockFetchMore = jest.fn(() => ({}));

describe('List', () => {

  beforeEach(() => {
    mockUseLazyQuery.mockReturnValue([
      getDetailsQuery,
      {
        data: {
          details: [
            {
              name: 'Name 1',
              address: 'address 1',
              phone: 'phone 1',
              email: 'email 1'
            },
            {
              name: 'Name 2',
              address: 'address 2',
              phone: 'phone 2',
              email: 'email 2'
            },
            {
              name: 'Name 3',
              address: 'address 3',
              phone: 'phone 3',
              email: 'email 3'
            }
          ]
        },
        fetchMore: mockFetchMore
      }
    ])
  });

  it('should match snapshot', () => {
    const { container } = render(<List />);
    expect(container).toMatchSnapshot();
  })

  it('should not display the load more button when there is less than 20 results', () => {
    const { queryByTestId } = render(<List />);
    expect(queryByTestId('loadButton')).toBeFalsy();
  })

  it('should display the load more button when there is more than 20 results', () => {
    mockUseLazyQuery.mockReturnValue([
      getDetailsQuery, { data: bigReponse.data, fetchMore: mockFetchMore }
    ]);
    const { getByTestId } = render(<List />);
    expect(getByTestId('loadButton')).toBeTruthy();
  })

  it('should call fetchMore when clicking on the button', () => {
    mockUseLazyQuery.mockReturnValue([
      getDetailsQuery, { data: bigReponse.data, fetchMore: mockFetchMore }
    ]);
    const { getByTestId } = render(<List />);
    act(() => {
      fireEvent.click(getByTestId('loadButton'))
    });
    expect(mockFetchMore).toHaveBeenCalledWith({
      variables: {
        limit: 20,
        search: '',
        offset: 21
      }
    })
  })
})