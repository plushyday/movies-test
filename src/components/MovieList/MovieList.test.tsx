import * as React from 'react';

import { Provider } from 'react-redux';
import store from 'store';

import { screen, render } from '@testing-library/react';
import MovieList from 'components/MovieList';

function generateMockMoviesData(amount: number): Movie[] {
  const outputData = [];
  for (let i = 0; i < amount; i++) {
    outputData.push({
      title: `Episode ${i}`,
      episode_id: i,
      release_date: 'any',
      characters: [],
    });
  }
  return outputData;
}

test('renders all movie items', () => {
  const movies = generateMockMoviesData(9);
  render(
    <Provider store={store}>
      <MovieList movies={movies} />
    </Provider>
  );
  const allButtons = screen.getAllByText('Show people');
  expect(allButtons).toHaveLength(movies.length);
});
