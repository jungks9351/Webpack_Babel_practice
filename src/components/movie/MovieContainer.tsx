import styled from 'styled-components';
import MovieList from './MovieList';

const MovieContainer = () => {
  return (
    <MovieContainerWrapper>
      <MovieList />
    </MovieContainerWrapper>
  );
};

const MovieContainerWrapper = styled.div`
  width: 100%;
  padding: 20px;
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

export default MovieContainer;
