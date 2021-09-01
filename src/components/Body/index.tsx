import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { getPlayCards, getRandomCards } from 'src/lib/functions/array';
import styled from 'styled-components';
import Card from './components/Card';
import { initialCards } from './resource';

const Container = styled.section`
  background-color: AliceBlue;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
const TopPanel = styled.section`
  background-color: Aquamarine;
  text-align: center;
`;
const ScoreBoard = styled.div``;

const CardsContainer = styled.section`
  background-color: burlywood;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

function Body(): ReactElement {
  const [leftOverCards, setLeftOverCards] = useState(initialCards);
  const [chosenCards, setChosenCards] = useState([]);

  const handleCardClick = (event: any): void => {
    if (!event) return;
    console.log(event.target.id);
  };

  return (
    <Container>
      <TopPanel>
        <h2>Instruction</h2>
        <ScoreBoard>
          <span>Score:</span>
          <span>Highscore:</span>
        </ScoreBoard>
      </TopPanel>
      <CardsContainer>
        {getPlayCards('first', leftOverCards, chosenCards).map((card) => (
          <Card handleClick={handleCardClick} key={card.name} name={card.name} imgSrc={card.imgSrc} />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default Body;
