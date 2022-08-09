import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMovie, initialize } from '../../redux/modules/movie';
import MovieItem from './MovieItem';
import SearchBar from './SearchBar';

const MovieList = () => {
  const dispatch = useAppDispatch();
  const { popularMovieList, searchMovieList } = useAppSelector(
    ({ movie }) => movie.lists
  );

  useEffect(() => {
    dispatch(fetchMovie({ list: 'popularMovieList', param: '/movie/popular' }));
  }, []);

  return (
    <>
      <MovieListWrapper>
        {popularMovieList.map(popularMovieData => (
          <MovieItem key={popularMovieData.id} popularMovieData={popularMovieData} />
        ))}
      </MovieListWrapper>
      <SearchBar />
      <MovieListWrapper>
        {searchMovieList.map(popularMovieData => (
          <MovieItem key={popularMovieData.id} popularMovieData={popularMovieData} />
        ))}
      </MovieListWrapper>
    </>
  );
};

const MovieListWrapper = styled.ul`
  display: flex;
  gap: 8px;
`;
export default MovieList;
