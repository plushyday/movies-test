import { Container, Paper } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const StyledContainer = styled(Container)(() => ({
  overflowX: 'scroll',
}));
