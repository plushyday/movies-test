import * as React from 'react';
import ContentTable from 'components/ContentTable';
import { Grid } from '@mui/material';

import MovieList from 'components/MovieList';

import { StyledGrid } from './style';

const rows = [
  { name: 'bla', birth_year: '1992', gender: 'male', mass: '170' },
  { name: 'bla2', birth_year: '1993', gender: 'male', mass: '170' },
  { name: 'bla3', birth_year: '1994', gender: 'male', mass: '140' },
  { name: 'bla4', birth_year: '1992', gender: 'male', mass: '170' },
  { name: 'bla25', birth_year: '1993', gender: 'male', mass: '170' },
  { name: 'bla36', birth_year: '1994', gender: 'male', mass: '140' },
  { name: 'bla7', birth_year: '1992', gender: 'male', mass: '170' },
  { name: 'bla28', birth_year: '1993', gender: 'male', mass: '170' },
  { name: 'bla39', birth_year: '1994', gender: 'male', mass: '140' },
  { name: 'bla55', birth_year: '1992', gender: 'male', mass: '170' },
  { name: '44', birth_year: '1993', gender: 'male', mass: '170' },
  { name: 'fff45', birth_year: '1994', gender: 'male', mass: '140' },
  { name: '564', birth_year: '1992', gender: 'male', mass: '170' },
  { name: '5666', birth_year: '1993', gender: 'male', mass: '170' },
  { name: 'dfdf', birth_year: '1994', gender: 'male', mass: '140' },
];

const Movies = () => {
  return (
    <StyledGrid container>
      <MovieList />
      <ContentTable tableData={rows} />
    </StyledGrid>
  );
};

export default Movies;
