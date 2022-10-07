import * as React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import ContentTable from 'components/ContentTable';

const defaultRowAmount: number = 10;

function generateMockTableData(amount: number) {
  const outputData = [];
  for (let i = 0; i < amount; i++) {
    outputData.push({
      name: `bla${i}`,
      birth_year: '1992',
      gender: 'male',
      mass: '170',
    });
  }
  return outputData;
}

// TODO: When nothing came to component

test('renders datatable with 9 items', () => {
  const mockTableData = generateMockTableData(9);
  render(<ContentTable tableData={mockTableData} />);
  const tableRowElements = screen.getAllByRole('checkbox');
  expect(tableRowElements).toHaveLength(mockTableData.length);
});

test('renders datatable with more than 10 items', () => {
  const mockTableData = generateMockTableData(15);
  render(<ContentTable tableData={mockTableData} />);
  const tableRowElements = screen.getAllByRole('checkbox');
  expect(tableRowElements).toHaveLength(defaultRowAmount);
});

test('renders datatable with more than 10 items and shows them on next page', async () => {
  const rowsAmount = 15;
  const mockTableData = generateMockTableData(rowsAmount);
  render(<ContentTable tableData={mockTableData} />);
  const element = await screen.findByLabelText('Go to next page');
  fireEvent.click(element);
  const tableRowElements = screen.getAllByRole('checkbox');
  expect(tableRowElements).toHaveLength(rowsAmount - defaultRowAmount);
});

// test('renders datatable and selection of "rows per page" changing amount of rows on a page', () => {
//   const rowsAmount = 15;
//   const mockTableData = generateMockTableData(rowsAmount);
//   const { getByText } = render(<ContentTable tableData={mockTableData} />);
//   fireEvent.click(getByText(/Go to next page/));
// });
