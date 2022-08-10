import { useEffect } from 'react';

import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMovie } from '../../redux/modules/movie';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useAppDispatch();
  const { popularMovieList, searchMovieList } = useAppSelector(
    ({ movie }) => movie.lists
  );

  useEffect(() => {
    dispatch(fetchMovie({ list: 'popularMovieList', param: '/movie/popular' }));
  }, []);

  console.log(searchMovieList === []);

  return (
    <>
      {searchMovieList !== [] && (
        <MovieListWrapper>
          {searchMovieList.map(popularMovieData => (
            <MovieItem
              key={popularMovieData.id}
              popularMovieData={popularMovieData}
            />
          ))}
        </MovieListWrapper>
      )}
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
    </>
  );
};

const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media screen and (min-width: 376px) {
    gap: 10px;
  }
`;

const MovieListTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
export default MovieList;
