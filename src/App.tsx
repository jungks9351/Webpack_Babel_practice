import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Text>Hello World</Text>
    </>
  );
};

const Text = styled.h1`
  font-size: 50px;
`;

export default App;
