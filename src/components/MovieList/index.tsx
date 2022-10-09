import * as React from 'react';

import { Stack } from '@mui/material';
import MovieCard from 'components/MovieCard';

import { StyledContainer } from './style';

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <StyledContainer maxWidth={false}>
      <Stack direction="row">
        {movies.map((movie) => (
          <MovieCard data={movie} key={movie.episode_id} />
        ))}
      </Stack>
    </StyledContainer>
  );
}
