import React from 'react'
import { render, screen } from '@testing-library/react'
import UserCard from '../components/UserCard/UserCard'

describe('<UserCard/>', () => {
  it('should render the contents in the user card', () => {
    render(<UserCard user={undefined} />)
    expect(screen.getByText('Adeola Adekoyejo')).toBeInTheDocument();
  })
})