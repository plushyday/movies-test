import * as React from 'react';

import { CircularProgress } from '@mui/material';
import { selectStatusIsLoading } from 'store/selectors';
import { useAppSelector } from 'store';

import { StyledBackdrop } from './style';

export default function LoaderOverlay() {
  const isLoading = useAppSelector(selectStatusIsLoading);

  return (
    <div>
      <StyledBackdrop open={isLoading}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </div>
  );
}
