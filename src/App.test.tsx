import React from 'react';
import sinon from 'sinon';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component' , () => {
  let clock : any;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
    render(
      <div>
        <App />
      </div>
    )
  });
  afterEach(() => {
    clock.restore();
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
    setTimeout(() => {
      console.log('Ahmed Faraz Sinon Fun')
    }, 20000);
    clock.tick(20000);
  })
})
