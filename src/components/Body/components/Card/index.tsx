import React from 'react';
import { ReactElement } from 'react';
import { TypeCardComponent } from 'src/lib/types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled(animated.span)`
  @media (min-width: 320px) {
    padding: 5px;
  }

  @media (min-width: 425px) {
    padding: 15px;
  }
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 1%;

  background-color: #f4dd03;
  border: solid;
  border-radius: 20px;
  box-shadow: 2px 2px;
`;
const Picture = styled.img`
  @media (min-width: 320px) {
    width: 50px;
  }

  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1070px) {
    width: 150px;
  }

  border: inherit;
  border-radius: inherit;
`;
const Name = styled.span`
  margin-top: 15px;
  font-weight: bold;
`;

function Card({ name, imgSrc, handleClick }: TypeCardComponent): ReactElement {
  const cardAnimation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <Container style={cardAnimation}>
      <Picture src={imgSrc} alt={name} onClick={handleClick} id={name}></Picture>
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
