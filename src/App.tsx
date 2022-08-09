import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import MovieContainer from './components/movie/MovieContainer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MovieContainer />
    </>
  );
};

export default App;
