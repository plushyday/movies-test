import * as React from 'react';

import { screen } from '@testing-library/react';
import NavigationMenu from 'components/NavigationMenu';
import { renderWithRouter } from 'utils/testUtils';

const mockNavigationList = [
  { title: '1', path: '1' },
  { title: '2', path: '2' },
  { title: '3', path: '3' },
  { title: '4', path: '4' },
];

test('renders all navigation items', () => {
  renderWithRouter(<NavigationMenu navigationList={mockNavigationList} />);
  const linkElements = screen.getAllByRole('menuitem');
  expect(linkElements).toHaveLength(mockNavigationList.length);
});
