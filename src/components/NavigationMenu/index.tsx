import * as React from 'react';

import { MenuItem, ListItemText } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import theme from 'theme';

import { StyledLink, StyledPaper, StyledNavigationMenuGrid } from './style';

export default function NavigationMenu({
  navigationList,
}: {
  navigationList: Navigation[];
}) {
  return (
    <StyledNavigationMenuGrid item xs={12} md={3}>
      <StyledPaper>
        {navigationList.map(({ title, path }) => (
          <StyledLink
            key={title}
            style={({ isActive }) => ({
              color: isActive
                ? theme.palette.primary.light
                : theme.palette.secondary.dark,
            })}
            to={`/${path}`}
          >
            <MenuItem>
              <ListItemText>{title}</ListItemText>
              <ArrowRight />
            </MenuItem>
          </StyledLink>
        ))}
      </StyledPaper>
    </StyledNavigationMenuGrid>
  );
}
