import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies, fetchCharactersByMovie } from 'store/thunks';

const initialState: MoviesStoreState = {
  movies: {},
  movieCharacters: {},
  selectedMovie: null,
  status: null,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie: (state, { payload }: PayloadAction<number>) => {
      state.selectedMovie = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = 'fail';
      state.error = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'success';
      state.error = null;
      state.movies = action.payload;
    });
    builder.addCase(fetchCharactersByMovie.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchCharactersByMovie.rejected, (state, action) => {
      state.status = 'fail';
      state.error = action.payload;
    });
    builder.addCase(fetchCharactersByMovie.fulfilled, (state, action) => {
      state.status = 'success';
      state.error = null;
      state.movieCharacters = {
        ...state.movieCharacters,
        [action.payload.episode_id]: action.payload.characters,
      };
    });
  },
});

export const { setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
