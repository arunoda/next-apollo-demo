import React from 'react'
import { render, screen } from '@testing-library/react'
import Errorboundary from '../pages/errorboundary'


describe('<Errorboundary/>', () => {
  it('should render the error message', () => {
    render(<Errorboundary />)
    expect(screen.getByText('An Error occured')).toBeInTheDocument();
  })
})