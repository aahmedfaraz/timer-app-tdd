import React from 'react';
import { render, cleanup, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App Component' , () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Must call is before rendering
    render(
      <div>
        <App />
      </div>
    )
  });
  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  test('should render all components', () => {
    const navbar = screen.getByTestId('navbar');
    const container = screen.getByTestId('container');
    const text = screen.getByTestId('text');
    const buttons = screen.getAllByTestId('button');

    expect(navbar).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(buttons).toHaveLength(3);
  })

  test('should work fine with start, stop and reset buttons', () => {
    const text = screen.getByTestId('text');
    const buttons = screen.getAllByTestId('button');

    // Initial Result
    expect(text).toHaveTextContent('00:00:00');

    // Test for start
    fireEvent.click(buttons[0]); // START
    act(() => {jest.advanceTimersByTime(5445000)}) // after 1h, 30m, 45s = 5445000
    fireEvent.click(buttons[1]); // STOP
    expect(text).toHaveTextContent('01:30:45'); // Test Result

    // Test for restart
    fireEvent.click(buttons[0]); // START again
    act(() => {jest.advanceTimersByTime(15000)}) // after 1h, 30m, 45s = 5445000
    fireEvent.click(buttons[1]); // STOP
    expect(text).toHaveTextContent('01:31:00'); // Test Result

    // Test for Reset
    fireEvent.click(buttons[2]); // RESET
    expect(text).toHaveTextContent('00:00:00'); // Test Result
  })
  
})
