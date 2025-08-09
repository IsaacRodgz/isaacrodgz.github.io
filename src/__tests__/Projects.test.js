import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../pages/Projects';

test('renders projects page', () => {
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );
  expect(screen.getByText(/My Personal Projects/i)).toBeInTheDocument();
});
