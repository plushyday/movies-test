import * as React from 'react';

import MovieList from 'components/MovieList';
import { useAppSelector } from 'store';
import { selectMovies } from 'store/selectors';

export default function MovieListContainer() {
  const movies = useAppSelector(selectMovies);

  return <>{movies.length > 0 ? <MovieList movies={movies} /> : <></>}</>;
}
