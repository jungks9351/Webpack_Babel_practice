import { client } from '.';

export const fetchMovieAPI = (param: string) => {
  return client
    .get(param)
    .then(res => {
      return res.data;
    })
    .catch(err => err);
};

export const searchMovieAPI = (query: string) => {
  if (!query) return;

  return client
    .get('/search/movie', {
      params: {
        query: query,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => err);
};
