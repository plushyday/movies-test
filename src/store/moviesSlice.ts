import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: MoviesStoreState = {
  movies: [],
  status: null,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (_, { rejectWithValue }) {
    let movies: Movie[] | [] = [];
    try {
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data: ServerDataMovies = await response.json();

      if (data?.results instanceof Array && data.results.length > 0) {
        movies = data.results.map((movieData) => ({
          title: movieData.title,
          episode_id: movieData.episode_id,
          release_date: movieData.release_date,
          characters: movieData.characters,
        }));
      }

      return movies;
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = 'fail';
      state.movies = [];
      state.error = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'success';
      state.error = null;
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
