import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button/Button'

describe('<Button/>', () => {
  it('should render the text in the button', () => {
    render(<Button onClick={jest.fn()}/>)
    expect(screen.getByText('Load more...')).toBeInTheDocument();
  })
})