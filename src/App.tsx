import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Body from './components/Body';
import Footer from './components/common/Footer';
import Header from './components/Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

function App(): ReactElement {
  return (
    <AppContainer className="App">
      <Header />
      <Body />
      <Footer />
    </AppContainer>
  );
}

export default App;
