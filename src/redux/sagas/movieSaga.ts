import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMovieAPI, searchMovieAPI } from '../../api/movie';
import {
  fetchMovie,
  fetchMovieFailed,
  fetchMovieSuccess,
  searchMovie,
  searchMovieFailed,
  searchMovieSuccess,
} from '../modules/movie';

function* fetchMovieListSaga(action: {
  payload: {
    param: string;
    list: string;
  };
}) {
  try {
    const { results } = yield call(() => {
      return fetchMovieAPI(action.payload.param);
    });
    yield put(fetchMovieSuccess({ list: action.payload.list, results }));
  } catch (err) {
    yield put(fetchMovieFailed({ list: action.payload.list, err }));
  }
}

function* searchMovieListSaga(action: {
  payload: {
    query: string;
    list: string;
  };
}) {
  try {
    const { results } = yield call(() => {
      return searchMovieAPI(action.payload.query);
    });
    yield put(searchMovieSuccess({ list: action.payload.list, results }));
  } catch (err) {
    yield put(searchMovieFailed({ list: action.payload.list, err }));
  }
}

function* movieSaga() {
  yield takeLatest(fetchMovie, fetchMovieListSaga);
  yield takeLatest(searchMovie, searchMovieListSaga);
}

export default movieSaga;
