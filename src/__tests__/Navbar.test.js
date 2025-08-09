import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});
