import * as React from 'react';
import ContentTable from 'components/ContentTable';
import { Grid } from '@mui/material';

import MovieList from 'components/MovieList';

const Movies = () => {
  return (
    <Grid container>
      <MovieList />
      <ContentTable />
    </Grid>
  );
};

export default Movies;
