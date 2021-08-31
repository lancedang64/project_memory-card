import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: bisque;
  width: 100%;
  text-align: center;
`;

function Header(): ReactElement {
  return (
    <Container>
      <h1>My Hero Academia Memory Card Game</h1>
    </Container>
  );
}

export default Header;
