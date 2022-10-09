import { Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledOutletGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(2),
  },
}));

export const StyledLayoutGridContainerstyled = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    alignContent: 'flex-start',
  },
}));
