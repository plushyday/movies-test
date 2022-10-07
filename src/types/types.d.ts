interface Navigation {
  title: string;
  path: string;
}

interface TableData {
  name: string;
  birth_year: string;
  gender: string;
  mass: string;
}
interface Column {
  id: keyof TableData;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
