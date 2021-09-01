import React from 'react';
import { ReactElement } from 'react';
import { TypeCardComponent } from 'src/lib/types';
import styled from 'styled-components';

const Container = styled.span`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 1%;
  background-color: chartreuse;
  padding: 15px;
`;
const Picture = styled.img`
  width: 150px;
  height: 150px;
`;
const Name = styled.span``;

function Card({ name, imgSrc, handleClick }: TypeCardComponent): ReactElement {
  return (
    <Container>
      <Picture src={imgSrc} alt={name} onClick={handleClick} id={name}></Picture>
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
