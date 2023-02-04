import { graphql } from 'msw'
import { Users } from './fixtures';
import { GET_ALL_USERS } from './constants';

export const handlers = [
  graphql.query(GET_ALL_USERS, (req, res, ctx) => {
    return res(
      ctx.data({
        Users
      }),
    )
  }
  ),
]
