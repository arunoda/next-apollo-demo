import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ContactCard from '../../../src/components/contactCard';

afterEach(cleanup);

const defaultProps = {
  name: 'test',
  email: 'test',
  address: 'test',
  phone: 'test',
};

describe('<ContactCard />', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<ContactCard {...defaultProps} />);

    expect(getByTestId('contact-card')).toBeTruthy();
  });

  it('renders the right name value', () => {
    const { getByTestId } = render(<ContactCard {...defaultProps} />);
    const value = getByTestId('contact-name').textContent;

    expect(value).toEqual(defaultProps.name);
  });

  it('renders the right email value', () => {
    const { getByTestId } = render(<ContactCard {...defaultProps} />);
    const value = getByTestId('contact-email').textContent;

    expect(value).toEqual(defaultProps.email);
  });

  it('renders the right address value', () => {
    const { getByTestId } = render(<ContactCard {...defaultProps} />);
    const value = getByTestId('contact-address').textContent;

    expect(value).toEqual(defaultProps.address);
  });

  it('renders the right phone value', () => {
    const { getByTestId } = render(<ContactCard {...defaultProps} />);
    const value = getByTestId('contact-phone').textContent;

    expect(value).toEqual(defaultProps.phone);
  });
});
