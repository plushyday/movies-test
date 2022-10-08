import * as React from 'react';
import { useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';
import { RootState } from 'store';

import { StyledBackdrop } from './style';

const LoaderOverlay = () => {
  const { status } = useSelector((state: RootState) => state.movies);

  return (
    <div>
      <StyledBackdrop open={status === 'loading'}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </div>
  );
};

export default LoaderOverlay;
