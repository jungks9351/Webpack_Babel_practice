import styled from 'styled-components';
import { MovieItemType } from '../../types/movieTypes';

const MovieItem = ({ popularMovieData }: { popularMovieData: MovieItemType }) => {
  const relaseDate = new Date(popularMovieData.release_date);
  const dateString = relaseDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MovieItemWrapper>
      <MoviePosterWrapper>
        <MoviePoster
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${popularMovieData.poster_path}`}
          alt=''
        />
      </MoviePosterWrapper>
      <MovieTitle>{popularMovieData.title}</MovieTitle>
      <p>{dateString}</p>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.li``;

const MoviePosterWrapper = styled.div``;

const MoviePoster = styled.img`
  border-radius: 12px 12px 0 0;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding: 8px 0;
`;
export default MovieItem;
