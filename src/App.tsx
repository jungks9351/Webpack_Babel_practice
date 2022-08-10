import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
