import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.light,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledNavigationMenuGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));
