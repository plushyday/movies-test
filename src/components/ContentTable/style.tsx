import { Paper, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledItemPaper = styled(Paper)(() => ({
  width: '100%',
  overflow: 'hidden',
  textAlign: 'center',
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.secondary.main,
}));
