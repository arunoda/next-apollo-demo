import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom';

describe('Home', () => {
    it('renders a heading', () => {
        render(<MockedProvider><Home /></MockedProvider>)

        const heading = screen.getByTestId('heading')

        expect(heading).toBeInTheDocument()
    })
})
