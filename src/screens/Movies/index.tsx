import * as React from 'react';
import ContentTableContainer from 'components/ContentTable/ContentTableContainer';
import MovieListContainer from 'components/MovieList/MovieListContainer';

import { StyledGrid } from './style';

const Movies = () => {
  return (
    <StyledGrid container>
      <MovieListContainer />
      <ContentTableContainer />
    </StyledGrid>
  );
};

export default Movies;
