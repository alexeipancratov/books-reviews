import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);

  expect(screen.getByText(/Welcome to Books Reviews/)).toBeInTheDocument();
});

test('verifies generic condition', () => {
  expect(true).toBe(true);
});