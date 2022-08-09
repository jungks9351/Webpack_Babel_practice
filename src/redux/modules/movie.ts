import { createSlice } from '@reduxjs/toolkit';
import { MovieItemType } from '../../types/movieTypes';

interface initialMovieState {
  lists: {
    popularMovieList: [] | MovieItemType[];
    [index: string]: [] | MovieItemType[];
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
      state.lists[action.payload.list] = action.payload.results;
      state.error = null;
    },
    fetchMovieFailed: (state, action) => {
      state.lists[action.payload.list] = [];
      state.error = action.payload.err.message;
    },
  },
});

export const { initialize, fetchMovie, fetchMovieSuccess, fetchMovieFailed } =
  movieSlice.actions;

export default movieSlice.reducer;
