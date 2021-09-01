import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { addCard, getPlayCards, getShuffledArr, removeCard } from 'src/lib/functions/array';
import { getDifficulty, getScore, isCardCorrect } from 'src/lib/functions/game-logic';
import { CardEvent, TypeCard, TypeDifficulty } from 'src/lib/types';
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
  flex-wrap: wrap;
  padding: 0% 15%;
`;

const maxRounds = initialCards.length;
const firstRoundCards = getPlayCards('easy', initialCards, []);

function Body(): ReactElement {
  const [leftOverCards, setLeftOverCards] = useState(initialCards);
  const [chosenCards, setChosenCards] = useState<TypeCard[]>([]);
  const [playCards, setPlayCards] = useState(firstRoundCards);
  const [round, setRound] = useState(1);
  const [difficulty, setDifficulty] = useState<TypeDifficulty>('easy');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setDifficulty(getDifficulty(round, maxRounds));
  }, [round]);

  useEffect(() => {
    const nextRoundCards = [...getPlayCards(difficulty, leftOverCards, chosenCards)];
    setPlayCards(getShuffledArr(nextRoundCards));
  }, [round, difficulty]);

  const handleCardClick = (event: CardEvent): void => {
    const cardName = event.target.id;
    return isCardCorrect(cardName, leftOverCards) ? nextRound(cardName) : gameOver();
  };

  const gameOver = (): void => {
    console.log('Game Over');
  };

  const nextRound = (cardName: string): void => {
    const correctCard = leftOverCards.find((card) => card.name === cardName);
    if (!correctCard) throw Error('no card found!?');
    setScore((prev) => prev + getScore(difficulty));
    setLeftOverCards(removeCard(correctCard, leftOverCards));
    setChosenCards(addCard(correctCard, chosenCards));
    setRound((prevRound) => prevRound + 1);
  };

  return (
    <Container>
      <TopPanel>
        <h2>Instruction</h2>
        <ScoreBoard>
          <span>Round: {round} </span>
          <span>Score: {score} </span>
          <span>Highscore: {highScore} </span>
          <span>Difficulty: {difficulty}</span>
        </ScoreBoard>
      </TopPanel>
      <CardsContainer>
        {playCards.map((card) => (
          <Card handleClick={handleCardClick} key={card.name} name={card.name} imgSrc={card.imgSrc} />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default Body;
