import { Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
