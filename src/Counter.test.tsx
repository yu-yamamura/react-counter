import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';

beforeEach(() => {
  render(<Counter max={10} />);
});

describe('When Counter component is mounted ', () => {
  it('should display "0 / max"', () => {
    expect(screen.getByTestId('count-and-max').innerHTML).toBe('0 / 10');
  });
});

describe('When the increment button is clicked', () => {
  describe('if the count is less than the max', () => {
    it('should display the count incremented by 1', () => {
      expect(screen.getByTestId('count-and-max').innerHTML).toBe('0 / 10');

      userEvent.click(screen.getByTestId('increment'));

      expect(screen.getByTestId('count-and-max').innerHTML).toBe('1 / 10');
    });
  });

  describe('if the count is greater than or equals the max', () => {
    it('should display the count reset to 0', () => {
      expect(screen.getByTestId('count-and-max').innerHTML).toBe('0 / 10');

      const incrementButton = screen.getByTestId('increment');
      for (let i = 0; i < 10; i++) {
        userEvent.click(incrementButton);
      }
      // After a user clicks the button ten times, the count will be ten.
      expect(screen.getByTestId('count-and-max').innerHTML).toBe('10 / 10');

      userEvent.click(incrementButton);
      expect(screen.getByTestId('count-and-max').innerHTML).toBe('0 / 10');
    });
  });
});

describe('When the reset button is clicked', () => {
  it('should display 0', () => {
    userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count-and-max').innerHTML).toBe('1 / 10');

    userEvent.click(screen.getByTestId('reset'));
    expect(screen.getByTestId('count-and-max').innerHTML).toBe('0 / 10');
  });
});