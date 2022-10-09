interface Navigation {
  title: string;
  path: string;
}

interface Column {
  id: keyof Character;
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

interface ServerDataCharacter {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

interface Movie {
  title: string;
  episode_id: number;
  release_date: string;
  characters: string[];
}

interface Character {
  birth_year: string;
  gender: string;
  mass: string;
  name: string;
}
interface MoviesStoreState {
  movies: { [key: number]: Movie };
  movieCharacters: { [key: number]: Character[] };
  selectedMovie: null | number;
  status: null | 'loading' | 'fail' | 'success';
  error: null | unknown;
}
