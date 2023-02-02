import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button/Button'

describe('<Button/>', () => {
  it('should render the contents in the user card', () => {
    render(<Button />)
    expect(screen.getByText('Load more...')).toBeInTheDocument();
  })
})