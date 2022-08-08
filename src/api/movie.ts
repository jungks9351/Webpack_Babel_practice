import { client } from '.';

export const fetchMovieAPI = (param: string) => {
  return client
    .get(param)
    .then(res => {
      return res.data;
    })
    .catch(err => err);
};
