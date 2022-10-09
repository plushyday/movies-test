import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const selectSelectedMovieEpisode = (state: RootState) =>
  state.movies.selectedMovie;
const selectCharacters = (state: RootState) => state.movies.movieCharacters;

export const selectCharactersByMovie = createSelector(
  selectSelectedMovieEpisode,
  selectCharacters,
  (movieId, characters) => {
    let charactersByMovie: undefined | Character[] = [];

    if (movieId && characters[movieId]) {
      charactersByMovie = characters[movieId];
    }
    return charactersByMovie;
  }
);

export const selectMovies = (state: RootState) =>
  Object.values(state.movies.movies);
