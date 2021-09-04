import React, { ReactElement } from 'react';
import { TypeCard } from 'src/lib/types';
import styled from 'styled-components';

const DebugContainer = styled.aside`
  position: fixed;
  left: 0;
  width: 150px;
  background-color: white;
  border: solid 2px black;
  padding: 10px;
  z-index: 2;
`;

interface TypeProps {
  leftOverCards: TypeCard[];
  chosenCards: TypeCard[];
  isGameOver: boolean;
  isMaxScore: boolean;
  maxRounds: number;
}

function DebugBox({ leftOverCards, chosenCards, isGameOver, isMaxScore, maxRounds }: TypeProps): ReactElement {
  return (
    <DebugContainer>
      <div>
        <h2>Leftover Cards</h2>
        {leftOverCards.map((card) => (
          <li key={card.name}>{card.name} </li>
        ))}
      </div>
      <div>
        <h2>Chosen Cards</h2>
        {chosenCards.map((card) => (
          <li key={card.name}>{card.name} </li>
        ))}
      </div>
      <div>
        <h2>States</h2>
        <li>isGameOver: {isGameOver.toString()}</li>
        <li>isMaxScore: {isMaxScore.toString()}</li>
        <li>maxRounds: {maxRounds}</li>
      </div>
    </DebugContainer>
  );
}

export default DebugBox;
