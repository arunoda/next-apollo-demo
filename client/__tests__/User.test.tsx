import {render} from '@testing-library/react'
import User from '../components/User'

test('renders the name in h3', () => {
    const { getByRole } = render(<User name='Kashif' address='Anywhere' />)
    const h3 = getByRole('heading')
    expect(h3).toHaveTextContent('Kashif')
})

test('renders the address with address class', () => {
    const { getByText } = render(<User name='Kashif' address='Anywhere' />)
    const p = getByText(/Anywhere/)
    expect(p).toHaveClass('address')
})