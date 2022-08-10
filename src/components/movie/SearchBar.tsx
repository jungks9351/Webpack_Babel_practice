import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks';
import { searchMovie } from '../../redux/modules/movie';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleChnageSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setSearch(target.value);
  };

  const handleSubmitSearchForm = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    dispatch(searchMovie({ list: 'searchMovieList', query: search }));
  };

  return (
    <SearchBarWrapper onSubmit={handleSubmitSearchForm}>
      <SearchInput type='text' onChange={handleChnageSearch} />
      <Button type='submit'>검색</Button>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.form`
  padding: 20px 0;

  display: flex;
`;
const SearchInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 500px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #ace;
  border-radius: 5px;
  border: none;
  width: 50px;
  color: #ffffff;
`;

export default SearchBar;
