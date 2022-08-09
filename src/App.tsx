import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
