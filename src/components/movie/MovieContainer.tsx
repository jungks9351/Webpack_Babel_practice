import { ReactNode } from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';

const MovieContainer = () => {
  return (
    <MovieContainerWrapper>
      <ContainerTitle>인기 영화 TOP 20</ContainerTitle>
      <MovieList />
    </MovieContainerWrapper>
  );
};

const MovieContainerWrapper = styled.div`
  padding: 20px;
  overflow-x: scroll;
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

const ContainerTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 8px;
`;

export default MovieContainer;
