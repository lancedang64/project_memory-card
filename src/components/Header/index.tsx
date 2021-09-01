import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: #f4dd03;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeLogo = styled.img`
  height: 100px;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 10px;
  background-color: #db0917;
  color: white;
  padding: 5px;
  display: inline-block;
`;

function Header(): ReactElement {
  return (
    <Container>
      <AnimeLogo src="../images/My_Hero_Academia_Logo.png" alt="My Hero Academia Logo" />
      <H1>Memory Card Game</H1>
    </Container>
  );
}

export default Header;
