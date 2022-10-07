import * as React from 'react';

import { MenuItem, ListItemText } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

import { StyledLink, StyledPaper, StyledNavigationMenuGrid } from './style';

const NavigationMenu = ({
  navigationList,
}: {
  navigationList: Navigation[];
}) => {
  return (
    <StyledNavigationMenuGrid item xs={12} md={3}>
      <StyledPaper>
        {navigationList.map(({ title, path }) => (
          <StyledLink key={title} to={`/${path}`}>
            <MenuItem>
              <ListItemText>{title}</ListItemText>
              <ArrowRight />
            </MenuItem>
          </StyledLink>
        ))}
      </StyledPaper>
    </StyledNavigationMenuGrid>
  );
};

export default NavigationMenu;
