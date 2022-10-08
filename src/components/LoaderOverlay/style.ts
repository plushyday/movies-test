import { Backdrop } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.primary.light,
}));
