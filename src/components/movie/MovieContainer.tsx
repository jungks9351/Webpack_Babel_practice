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
  padding: 20px;
  overflow-x: scroll;
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

export default MovieContainer;
