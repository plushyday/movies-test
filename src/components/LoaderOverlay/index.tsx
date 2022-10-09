import * as React from 'react';

import { CircularProgress } from '@mui/material';
import { RootState, useAppSelector } from 'store';

import { StyledBackdrop } from './style';

const LoaderOverlay = () => {
  const { status } = useAppSelector((state: RootState) => state.movies);

  return (
    <div>
      <StyledBackdrop open={status === 'loading'}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </div>
  );
};

export default LoaderOverlay;
