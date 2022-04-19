// __tests__/index.test.jsx
import { MockedProvider } from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { generateUsers } from '../utils'
import '@testing-library/jest-dom'
import { GET_USERS } from '@/graphql/queries';



const paging = { offset: 0, limit: 20 };
const mocks = [
  {
    request: {
      query: GET_USERS,
      variables: {
        offset: paging.offset,
        limit: paging.limit,
      },
    },
    error: new Error('An error ocurred.')
  },
  {
    request: {
      query: GET_USERS,
      variables: {
        offset: paging.offset,
        limit: paging.limit,
      },
    },
    result: {
      data: {
        users: generateUsers(paging.limit),
      },
    },
  },
];

describe('Home', () => {
  it('Matches snapshot', () => {
    const { container } = render(
      <MockedProvider mocks={[mocks[1]]}>
        <Home initialData={generateUsers(20)}/>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  })
})