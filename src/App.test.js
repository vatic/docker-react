import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed by feature branch!!!/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders "bye there" text', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/bye there/i);
//   expect(linkElement).toBeInTheDocument();
// });
