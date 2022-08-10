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
      <MovieListTitle>인기 영화 TOP20</MovieListTitle>
      <MovieListWrapper>
        {popularMovieList.map((popularMovieData, i) => (
          <MovieItem
            key={popularMovieData.id}
            popularMovieData={popularMovieData}
            rank={i + 1}
          />
        ))}
      </MovieListWrapper>
      <SearchBar />
      <MovieListWrapper>
        {searchMovieList &&
          searchMovieList.map(popularMovieData => (
            <MovieItem
              key={popularMovieData.id}
              popularMovieData={popularMovieData}
            />
          ))}
      </MovieListWrapper>
    </>
  );
};

const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 376px) {
    gap: 8px;
  }
`;

const MovieListTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
export default MovieList;
