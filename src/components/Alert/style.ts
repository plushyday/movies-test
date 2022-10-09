import { Alert } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledAlert = styled(Alert)(({ theme }) => ({
  position: 'absolute',
  marginLeft: '50%',
  width: '50%',
  zIndex: theme.zIndex.drawer + 1,
}));
