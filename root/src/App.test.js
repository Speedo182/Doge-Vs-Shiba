// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Doge Vs Shiba/i);
  expect(titleElement).toBeInTheDocument();
});

test('updates score correctly', () => {
  render(<App />);
  const dogeButton = screen.getByTestId('doge-button');
  const shibaButton = screen.getByTestId('shiba-button');
  const scoreElement = screen.getByTestId('score');

  expect(scoreElement).toHaveTextContent('0');

  fireEvent.click(dogeButton);
  expect(scoreElement).toHaveTextContent('1');

  fireEvent.click(shibaButton);
  expect(scoreElement).toHaveTextContent('1');

  fireEvent.click(shibaButton);
  expect(scoreElement).toHaveTextContent('2');

  fireEvent.click(dogeButton);
  expect(scoreElement).toHaveTextContent('2');
});

test('resets score correctly', () => {
  render(<App />);
  const dogeButton = screen.getByTestId('doge-button');
  const shibaButton = screen.getByTestId('shiba-button');
  const resetButton = screen.getByTestId('reset-button');
  const scoreElement = screen.getByTestId('score');

  fireEvent.click(dogeButton);
  fireEvent.click(shibaButton);
  expect(scoreElement).toHaveTextContent('2');

  fireEvent.click(resetButton);
  expect(scoreElement).toHaveTextContent('0');
});
