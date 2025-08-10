import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('toggles navbar when button is clicked', async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const button = screen.getByRole('button');
  const navbar = document.querySelector('.navbar');
  expect(navbar).toHaveAttribute('id', 'close');
  await userEvent.click(button);
  expect(navbar).toHaveAttribute('id', 'open');
  await userEvent.click(button);
  expect(navbar).toHaveAttribute('id', 'close');
});
