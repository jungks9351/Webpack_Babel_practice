import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { testFail, testSuccess } from './redux/modules/test';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const dispatch = useAppDispatch();
  const test = useAppSelector(({ test }) => test.test);

  const handleSuccessBtn = () => {
    dispatch(testSuccess());
    console.log('Success');
  };

  const handleFaillBtn = () => {
    dispatch(testFail());
    console.log('Fail');
  };

  return (
    <>
      <GlobalStyles />
      <Text>{test}</Text>
      <Button onClick={handleSuccessBtn}>Success</Button>
      <Button onClick={handleFaillBtn}>Fail</Button>
    </>
  );
};

const Text = styled.h1`
  font-size: 50px;
`;

const Button = styled.button``;

export default App;
