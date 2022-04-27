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

describe('Pokemon list - behavioral test', () => {
  it('should render Chansey when Chansey is searched for', async () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // find the search/filter input box
    const search = screen.getByPlaceholderText('Search by name');

    // type the word "Chansey" into our search input
    userEvent.type(search, 'Chansey');

    // return waitFor(() => {
    //   // check that only "Chansey" renders
    // const result = await screen.findByText('Chansey');
    // expect(result.textContent).toEqual('Chansey');
    const result = await screen.findAllByRole('heading');
    expect(result.length).toEqual(1);
    expect(result[0].textContent).toEqual('Chansey');
    // });
    // await screen.findAllByRole('heading', { name: 'Chansey ' });
  });
});
