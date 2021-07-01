/* eslint-disable react/prop-types */
import React from 'react';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import ContactList from '../../../src/features/contactList';

import { GET_PERSONS_QUERY } from '../../../src/query/persons';

const Wrapper = ({ mocks = [] }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <ContactList />
  </MockedProvider>
);

beforeEach(cleanup);

describe('<ContactList />', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Wrapper />);

    expect(getByTestId('contact-list')).toBeTruthy();
  });

  it('renders with error dialog', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        error: new Error('An error occurred'),
      },
    ];

    const { findByTestId } = render(<Wrapper mocks={mocks} />);

    const errorDialog = await findByTestId('error-dialog');

    expect(errorDialog).toBeTruthy();
  });

  it('renders the loading spinner', () => {
    const { getByTestId } = render(<Wrapper />);

    expect(getByTestId('loading-spinner')).toBeTruthy();
  });

  it('renders some contacts', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        result: {
          data: {
            persons: [
              {
                id: 1,
                address: 'test',
                email: 'test',
                name: 'test',
                phone: 'test',
              },
            ],
          },
        },
      },
    ];

    const { findAllByTestId } = render(<Wrapper mocks={mocks} />);

    const contactCard = await findAllByTestId('contact-card');

    expect(contactCard.length).toBeGreaterThan(0);
  });

  it('renders no contacts', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        result: {
          data: {
            persons: [],
          },
        },
      },
    ];

    const { findByTestId } = render(<Wrapper mocks={mocks} />);

    const contactCard = await findByTestId('contact-missing');

    expect(contactCard).toBeTruthy();
  });

  it('renders loading spinner after clicking loading button', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        result: {
          data: {
            persons: [...Array(10).keys()].map(() => ({
              address: 'test',
              email: 'test',
              name: 'test',
              phone: 'test',
            })),
          },
        },
      },
    ];

    const { findByTestId } = render(<Wrapper mocks={mocks} />);

    const loadingButton = await findByTestId('loading-button');

    fireEvent.click(loadingButton);

    const loadingSpinner = await findByTestId('loading-spinner');

    expect(loadingSpinner).toBeTruthy();
  });

  it('renders more contacts after clicking loading button', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        result: {
          data: {
            persons: [...Array(10).keys()].map(id => ({
              id,
              address: 'test',
              email: 'test',
              name: 'test',
              phone: 'test',
            })),
          },
        },
      },
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 2 },
        },
        result: {
          data: {
            persons: [...Array(10).keys()].map(id => ({
              id,
              address: 'test',
              email: 'test',
              name: 'test',
              phone: 'test',
            })),
          },
        },
      },
    ];

    const { findAllByTestId, findByTestId } = render(<Wrapper mocks={mocks} />);

    const initialContactCards = await findAllByTestId('contact-card');
    const loadingButton = await findByTestId('loading-button');

    fireEvent.click(loadingButton);

    await waitFor(() => new Promise(res => setTimeout(res, 10)));

    const finalContactCards = await findAllByTestId('contact-card');

    expect(finalContactCards.length).toBeGreaterThanOrEqual(initialContactCards.length);
  });

  it('renders filtered contacts', async () => {
    const mocks = [
      {
        request: {
          query: GET_PERSONS_QUERY,
          variables: { limit: 10, offset: 0 },
        },
        result: {
          data: {
            persons: [
              {
                id: 1,
                address: 'test',
                email: 'test',
                name: 'test',
                phone: 'test',
              },
            ],
          },
        },
      },
    ];
    const { getByTestId, queryAllByTestId, findAllByTestId } = render(<Wrapper mocks={mocks} />);

    const initialContactCards = await findAllByTestId('contact-card');
    const search = getByTestId('contact-search');

    fireEvent.change(search, { target: { value: 'test' } });

    const finalContactCards = await queryAllByTestId('contact-card');

    expect(finalContactCards.length).toBeLessThanOrEqual(initialContactCards.length);
  });
});
