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
`;

interface TypeProps {
  leftOverCards: TypeCard[];
  chosenCards: TypeCard[];
}

function DebugBox({ leftOverCards, chosenCards }: TypeProps): ReactElement {
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
    </DebugContainer>
  );
}

export default DebugBox;
