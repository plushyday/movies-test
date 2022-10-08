import * as React from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@mui/material';
import MovieCard from 'components/MovieCard';
import { RootState } from 'store';

import { StyledContainer } from './style';

const MovieList = () => {
  const { movies } = useSelector((state: RootState) => state.movies);

  return (
    <StyledContainer>
      <Stack direction="row">
        {movies.map((movie) => (
          <MovieCard data={movie} key={movie.episode_id} />
        ))}
      </Stack>
    </StyledContainer>
  );
};

export default MovieList;
