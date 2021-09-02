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
  padding: 15px;
  background-color: #f4dd03;
  border: solid;
  border-radius: 20px;
  box-shadow: 2px 2px;
`;
const Picture = styled.img`
  width: 150px;
  height: 150px;
  border: inherit;
  border-radius: inherit;
`;
const Name = styled.span`
  margin-top: 15px;
  font-weight: bold;
`;

function Card({ name, imgSrc, handleClick }: TypeCardComponent): ReactElement {
  return (
    <Container>
      <Picture src={imgSrc} alt={name} onClick={handleClick} id={name}></Picture>
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
