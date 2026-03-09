import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Expresso Horizon/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders form title', () => {
  render(<App />);
  const formTitle = screen.getByText(/Nova Reserva/i);
  expect(formTitle).toBeInTheDocument();
});

