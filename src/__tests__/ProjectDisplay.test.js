import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProjectDisplay from '../pages/ProjectDisplay';

test('renders fallback message when project is not found', () => {
  render(
    <MemoryRouter initialEntries={['/project/999']}>
      <Routes>
        <Route path="/project/:id" element={<ProjectDisplay />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/Project not found/i)).toBeInTheDocument();
});
