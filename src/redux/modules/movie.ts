import { createSlice } from '@reduxjs/toolkit';
import { MovieItem } from '../../types/movie';

interface initialMovieState {
  lists: {
    popularMovieList: [] | MovieItem[];
    [index: string]: [] | MovieItem[];
  };
  error: string | null;
}

const initialState: initialMovieState = {
  lists: {
    popularMovieList: [],
  },
  error: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    initialize: () => initialState,
    fetchMovie: (state, action) => {
      state.lists[action.payload.list] = [];
      state.error = null;
    },
    fetchMovieSuccess: (state, action) => {
      console.log(action.payload.list);

      state.lists[action.payload.list] = action.payload.results;
      state.error = null;
    },
    fetchMovieFailed: (state, action) => {
      console.log(action.payload.list, action.payload.error);
      state.lists[action.payload.list] = [];
      state.error = action.payload.err.message;
    },
  },
});

export const { initialize, fetchMovie, fetchMovieSuccess, fetchMovieFailed } =
  movieSlice.actions;

export default movieSlice.reducer;
