import { screen } from '@testing-library/react';
import NavigationLayout from 'screens/NavigationLayout';
import { renderWithRouter } from 'utils/testUtils';

const mockNavigationList = [
  { title: '1', path: '1' },
  { title: '2', path: '2' },
  { title: '3', path: '3' },
  { title: '4', path: '4' },
];

test('renders all navigation items', () => {
  renderWithRouter(<NavigationLayout navigationList={mockNavigationList} />);
  const linkElements = screen.getAllByRole('menuitem');
  expect(linkElements).toHaveLength(mockNavigationList.length);
});
