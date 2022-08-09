import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMovie } from '../../redux/modules/movie';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useAppDispatch();
  const { popularMovieList } = useAppSelector(({ movie }) => movie.lists);

  useEffect(() => {
    dispatch(fetchMovie({ list: 'popularMovieList', param: '/popular' }));
  }, []);

  return (
    <MovieListWrapper>
      {popularMovieList.map(popularMovieData => (
        <MovieItem key={popularMovieData.id} popularMovieData={popularMovieData} />
      ))}
    </MovieListWrapper>
  );
};

const MovieListWrapper = styled.ul`
  display: flex;
  gap: 8px;
`;
export default MovieList;
