import * as React from 'react';

import { Outlet } from 'react-router-dom';
import NavigationMenu from 'components/NavigationMenu';

import { StyledLayoutGridContainerstyled, StyledOutletGrid } from './style';

export default function Layout({
  navigationList,
}: {
  navigationList: Navigation[];
}) {
  return (
    <StyledLayoutGridContainerstyled container>
      <NavigationMenu navigationList={navigationList} />
      <StyledOutletGrid
        container
        spacing={0}
        direction="column"
        item
        xs={12}
        md={9}
      >
        <Outlet />
      </StyledOutletGrid>
    </StyledLayoutGridContainerstyled>
  );
}
