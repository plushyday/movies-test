import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { setSelectedMovie } from 'store/moviesSlice';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (_, { rejectWithValue }) {
    let movies: MoviesStoreState['movies'] | {} = {};
    try {
      const response = await fetch('https://swapi.dev/api/films');

      const data: ServerDataMovies = await response.json();

      if (data?.results?.length) {
        movies = data.results.reduce((container, item) => {
          container[item.episode_id] = {
            title: item.title,
            episode_id: item.episode_id,
            release_date: item.release_date,
            characters: item.characters,
          };
          return container;
        }, {} as MoviesStoreState['movies']);
      }

      return movies;
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const setCharactersByMovie = createAsyncThunk<
  unknown,
  number,
  { state: RootState }
>(
  'movies/setCharactersByMovie',
  async function (episode_id: number, { getState, dispatch }) {
    const {
      movies: { movieCharacters },
    } = getState();

    // if characters weren't fetched before
    if (!movieCharacters[episode_id]) {
      dispatch(fetchCharactersByMovie(episode_id));
    }

    dispatch(setSelectedMovie(episode_id));
  }
);

export const fetchCharactersByMovie = createAsyncThunk<
  { episode_id: number; characters: Character[] },
  number,
  { state: RootState }
>(
  'movies/fetchCharactersByMovie',
  async function (episode_id: number, { getState, rejectWithValue }) {
    try {
      const {
        movies: { movies },
      } = getState();

      const charactersLinks: string[] = movies[episode_id].characters;
      const charactersResponses = await Promise.all(
        charactersLinks.map((charachterLink) => fetch(charachterLink))
      );
      const characters: ServerDataCharacter[] = await Promise.all(
        charactersResponses.map(async (res) => await res.json())
      );

      return {
        characters: characters.map((character) => ({
          birth_year: character.birth_year,
          gender: character.gender,
          mass: character.mass,
          name: character.name,
        })),
        episode_id,
      };
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  }
);
