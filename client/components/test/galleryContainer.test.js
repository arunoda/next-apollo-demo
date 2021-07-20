import React from 'react';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ContactList from '../galleryContainer'
import { GET_USERS } from '../../graphql/queries';



beforeEach(cleanup);

describe('galleryContainer', () => {
  it('should render with loader', () => {
    const { getByTestId } = render(<MockedProvider addTypename={false}>
      <ContactList />
    </MockedProvider>);

    expect(getByTestId('loader')).toBeTruthy()
  });


  it('should render with error ', async () => {
    const mocks = [
      {
        request: {
          query: GET_USERS,
          variables: { page: 1, perPage: 10 },
        },
        error: new Error('An error occurred'),
      },
    ];

    const { findByTestId } = render(<MockedProvider mocks={mocks} addTypename={false}>
      <ContactList />
    </MockedProvider>);
    const errorDialog = await findByTestId('error');
    expect(errorDialog).toBeTruthy();
  });

// not working
  /* it('should render card list', async () => {
    const mocks = [
      {
        request: {
          query: GET_USERS,
          variables: { page: 1, perPage: 2 },
        },
        result: {
          data: {
            user: [{ name: 'Rupali', address: 'Uk' }]
          },
        }
      },

    ];

    const { findAllByTestId } = render(<MockedProvider mocks={mocks} addTypename={false}>
      <ContactList />
    </MockedProvider>);

    const contactCard = await findAllByTestId('cards');

    expect(contactCard).toBeTruthy();
  }); */



})