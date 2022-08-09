import { createSlice } from '@reduxjs/toolkit';
import { MovieItemType } from '../../types/movieTypes';

interface initialMovieState {
  lists: {
    popularMovieList: [] | MovieItemType[];
    searchMovieList: [] | MovieItemType[];
    [index: string]: [] | MovieItemType[];
  };
  error: string | null;
}

const initialState: initialMovieState = {
  lists: {
    popularMovieList: [],
    searchMovieList: [],
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
    searchMovie: (state, action) => {
      state.lists[action.payload.list] = [];
      state.error = null;
    },
    searchMovieSuccess: (state, action) => {
      state.lists[action.payload.list] = action.payload.results;
      state.error = null;
    },
    searchMovieFailed: (state, action) => {
      state.lists[action.payload.list] = [];
      state.error = action.payload.err.message;
    },
  },
});

export const {
  initialize,
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieFailed,
  searchMovie,
  searchMovieSuccess,
  searchMovieFailed,
} = movieSlice.actions;

export default movieSlice.reducer;
