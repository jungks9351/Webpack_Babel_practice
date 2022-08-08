import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: 'b1f42a273f605f2b79d537a4c1929770',
    language: 'ko-kr',
    regions: 'kr',
  },
  timeout: 1000,
});
