import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('Pokemon list - component test', () => {
  it('should render pokemon images', async () => {
    // rendered component to the screen
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // find and check for all rendered images by the alt tag
    await screen.findAllByRole('img', { alt: 'pokemon ' });
    // await screen.findAllByAltText('pokemon');
  });
});
