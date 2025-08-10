import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';

test('external links are clickable and have correct attributes', async () => {
  render(<Footer />);
  const links = screen.getAllByRole('link');
  const githubLink = links[0];
  expect(githubLink).toHaveAttribute('href', 'https://github.com/IsaacRodgz');
  expect(githubLink).toHaveAttribute('target', '_blank');
  await userEvent.click(githubLink);
  expect(githubLink).toHaveFocus();

  const linkedinLink = links[1];
  expect(linkedinLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/isaacrodgz/'
  );
  expect(linkedinLink).toHaveAttribute('target', '_blank');
  await userEvent.click(linkedinLink);
  expect(linkedinLink).toHaveFocus();
});
