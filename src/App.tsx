import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchMovie } from './redux/modules/movie';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const dispatch = useAppDispatch();
  const { popularMovieList } = useAppSelector(({ movie }) => movie.lists);

  useEffect(() => {
    dispatch(fetchMovie({ list: 'popularMovieList', param: '/popular' }));
  }, []);
  return (
    <>
      <GlobalStyles />
      <Text>인기 영화 순위</Text>
      <ul>
        {popularMovieList.map(popularMovie => (
          <li key={popularMovie.id}>
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${popularMovie.poster_path}`}
              alt=''
            />
            <p>{popularMovie.title}</p>
            <p>{popularMovie.release_date}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const Text = styled.h1`
  font-size: 50px;
`;

export default App;
