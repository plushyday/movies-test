import * as React from 'react';
import { Grid, Stack } from '@mui/material';
import MovieCard from 'components/MovieCard';

import { StyledContainer, StyledItem } from './style';

const MovieList = () => {
  return (
    <StyledContainer>
      <Stack direction="row">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <MovieCard key={i} />
        ))}
      </Stack>
    </StyledContainer>
  );
};

export default MovieList;
