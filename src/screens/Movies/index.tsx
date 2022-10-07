import * as React from 'react';
import ContentTable from 'components/ContentTable';
import { Grid } from '@mui/material';

import MovieList from 'components/MovieList';

import { StyledGrid } from './style';

const Movies = () => {
  return (
    <StyledGrid container>
      <MovieList />
      <ContentTable />
    </StyledGrid>
  );
};

export default Movies;
