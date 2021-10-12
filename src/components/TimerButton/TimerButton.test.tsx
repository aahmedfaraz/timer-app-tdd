import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import TimerButton from './TimerButton';

const greetings = () => console.log('Hi Champ');

describe('TimerButton Component', () => {
    const mockFunction = jest.fn(greetings);
    beforeEach(() => render(
        <div>
            <TimerButton icon="play_arrow" text="Play" callback={mockFunction} />
        </div>
    ));
    afterEach(cleanup);

    test('should render correct icon and text', () => {
        const button = screen.getByTestId('button');
        const icon = screen.getByTestId('icon');

        expect(button).toBeInTheDocument();
        expect(icon).toHaveTextContent('play_arrow');
        expect(button).toHaveTextContent('Play');
    })

    test('should run callback function on click', () => {
        const button = screen.getByTestId('button');

        expect(mockFunction).not.toBeCalled();
        fireEvent.click(button);
        expect(mockFunction).toBeCalled();
    })
    
    
})
