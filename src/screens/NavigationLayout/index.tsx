import * as React from 'react';

import { Paper, Grid, MenuItem, ListItemText } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';

import { StyledLink, NavigationMenuGridStyle, OutletGridStyle } from './style';

export default function NavigationLayout({
  navigationList,
}: {
  navigationList: Navigation[];
}) {
  return (
    <Grid container>
      <NavigationMenuGridStyle item xs={12} md={3}>
        <Paper>
          {navigationList.map(({ title, path }) => (
            <StyledLink key={title} to={`/${path}`}>
              <MenuItem>
                <ListItemText>{title}</ListItemText>
                <ArrowRight />
              </MenuItem>
            </StyledLink>
          ))}
        </Paper>
      </NavigationMenuGridStyle>
      <OutletGridStyle
        container
        spacing={0}
        direction="column"
        item
        xs={12}
        md={9}
      >
        <Outlet />
      </OutletGridStyle>
    </Grid>
  );
}
