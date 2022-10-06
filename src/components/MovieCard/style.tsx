import { Paper } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledItemPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'start',
  padding: theme.spacing(1),
  width: '300px',
  color: theme.palette.text.secondary,
}));

export const StyledPaperSmallBlock = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '100px',
  width: '100px',
}));
