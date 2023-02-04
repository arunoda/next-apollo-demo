import React from 'react'
import { render, screen } from '@testing-library/react'
import UserCard, { UserCardProp } from '../components/UserCard/UserCard'
import { Users } from '../mocks/handlers/users/fixtures'

const user = Users[0];

const UserCardWrapper = (props: UserCardProp) => (
  <>
    <UserCard {...props} />
  </>
)

describe('<UserCard/>', () => {
  it('should render the contents in the user card', () => {
    render(<UserCardWrapper user={user} />)
    expect(screen.getByText(`${user.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    expect(screen.getByText(`Phone: ${user.phone}`)).toBeInTheDocument();
    expect(screen.getByText(`Address: ${user.address}`)).toBeInTheDocument();
  })
})