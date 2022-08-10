import styled from 'styled-components';
import { MovieItemType } from '../../types/movieTypes';

const MovieItem = ({
  popularMovieData,
  rank,
}: {
  popularMovieData: MovieItemType;
  rank?: number;
}) => {
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
      <MovieinfoWrapper>
        <MovieTitle>{popularMovieData.title}</MovieTitle>
        <MovieRelaseDate>{dateString}</MovieRelaseDate>
      </MovieinfoWrapper>
      {rank && <MovieRank>{rank}</MovieRank>}
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.li`
  position: relative;

  width: 100%;
  margin-top: 30px;

  border: 1px solid #e3e3e3;
  border-radius: 12px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 376px) {
    width: calc(50% - 10px);
  }
  @media screen and (min-width: 769px) {
    width: calc(25% - 10px);
  }
`;

const MoviePosterWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 500px;
`;

const MoviePoster = styled.img`
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 100%;
`;

const MovieinfoWrapper = styled.div`
  padding: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding: 8px 0;
`;

const MovieRelaseDate = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const MovieRank = styled.div`
  position: absolute;
  top: -20px;
  left: -8px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border: 3px solid #000000;
  border-radius: 50%;

  background-color: #ffffff;

  font-size: 30px;
`;
export default MovieItem;
