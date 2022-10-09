import { Card, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(-2),
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '700px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '900px',
  },
}));
