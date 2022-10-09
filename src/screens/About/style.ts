import { Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignContent: 'center',
  marginTop: theme.spacing(2),
}));
