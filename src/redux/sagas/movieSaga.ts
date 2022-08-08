import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMovieAPI } from '../../api/movie';
import { fetchMovie, fetchMovieFailed, fetchMovieSuccess } from '../modules/movie';

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

function* movieSaga() {
  yield takeLatest(fetchMovie, fetchMovieListSaga);
}

export default movieSaga;
