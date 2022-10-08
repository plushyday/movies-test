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

interface ServerDataMovies {
  count: number;
  next: null;
  previous: null;
  results: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }[];
}

interface Movie {
  title: string;
  episode_id: number;
  release_date: string;
  characters: string[];
}
interface MoviesStoreState {
  movies: Movie[];
  status: null | 'loading' | 'fail' | 'success';
  error: null | unknown;
}
