import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export const NavigationMenuGridStyle = styled(Grid)(({ theme }) => ({
  border: `2px solid ${theme.palette.text.secondary}`,
}));

export const OutletGridStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
  },
}));
