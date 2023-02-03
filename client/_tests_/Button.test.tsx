import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button/Button'

describe('<Button/>', () => {
  it('should render the text in the button', () => {
    render(<Button />)
    expect(screen.getByText('Load more...')).toBeInTheDocument();
  })
})