import React from 'react'
import { render, cleanup, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar Component', () => {
    beforeEach(() => render(<Navbar />))
    afterEach(cleanup);

    test('should render all elements with correct text', () => {
        const navLines = screen.getAllByTestId('nav-line');
        const navIcon = screen.getByTestId('nav-icon');

        expect(navLines).toHaveLength(3);

        expect(navLines[0]).toHaveTextContent('Timer App');
        expect(navLines[1]).toHaveTextContent('using Test Driven Development');
        expect(navLines[2]).toHaveTextContent('by Ahmed Faraz');
        expect(navIcon).toHaveTextContent('timer');
    })
    
})