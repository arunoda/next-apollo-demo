import React from 'react'
import { render, screen } from '@testing-library/react'
import UserCard from '../components/UserCard/UserCard'
import Errorboundary from '../pages/errorboundary'

describe('<Errorboundary/>', () => {
  it('should render the contents in the user card', () => {
    render(<Errorboundary />)
    expect(screen.getByText('An Error occured')).toBeInTheDocument();
  })
})