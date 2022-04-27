import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('Pokemon list - component test', () => {
  it('should render pokemon images', async () => {
    // rendered component to the screen
    render(<List />);

    // find and check for all rendered images by the alt tag
    await screen.findAllByRole('img', { alt: 'pokemon ' });
    // await screen.findAllByAltText('pokemon');
  });
});

describe('Pokemon list - behavioral test', () => {
  it('should render Chansey when Chansey is searched for', async () => {
    render(<List />);

    // find an element with the text of "Loading Pokemon..."
    screen.getByText('Loading Pokemon...');

    // find the search/filter input box
    const search = await screen.findByPlaceholderText('Search by name');

    // type the word "Chansey" into our search input
    userEvent.type(search, 'Chansey');

    // check that only "Chansey" renders
    const result = await screen.findByText(/Chansey/i);
    expect(result.textContent).toEqual('CHANSEY');

    // Failed attempt:
    // const result = await screen.findAllByRole('heading');
    // expect(result.length).toEqual(1);
    // expect(result[0].textContent).toEqual('Chansey');
  });
});
