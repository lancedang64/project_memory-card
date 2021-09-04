import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { addCard, getPlayCards, getShuffledArr, removeCard } from 'src/lib/functions/array';
import { getDifficulty, getScore, isCardCorrect } from 'src/lib/functions/game-logic';
import { CardEvent, TypeCard, TypeDifficulty } from 'src/lib/types';
import styled from 'styled-components';
import Card from './components/Card';
import CheatModeBox from './components/CheatModeBox/CheatModeBox';
import DebugBox from './components/DebugBox';
import GameOverModal from './components/GameOverModal';
import Instruction from './components/Instruction';
import ScoreBoard from './components/ScoreBoard';
import { initialCards } from './initialCards';

const Container = styled.section`
  background-color: AliceBlue;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
const TopPanel = styled.section`
  background: radial-gradient(#db0917, #8b0912);
  color: white;
  border: solid 4px black;
  padding: 15px 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const CardsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1520px) {
    padding: 0% 0%;
  }
  padding: 0% 15%;
  background-color: #ecc0a3;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ec7629' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const maxRounds = initialCards.length;
const firstRoundCards = getPlayCards('easy', initialCards, []);

function Body(): ReactElement {
  // const [isLoading, setIsLoading] = useState(true);
  const [leftOverCards, setLeftOverCards] = useState(initialCards);
  const [chosenCards, setChosenCards] = useState<TypeCard[]>([]);
  const [playCards, setPlayCards] = useState(firstRoundCards);
  const [round, setRound] = useState(1);
  const [difficulty, setDifficulty] = useState<TypeDifficulty>('easy');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isMaxScore, setIsMaxScore] = useState(false);
  const [isInvincible, setIsInvincible] = useState(false);
  const [isDebugMode, setIsDebugMode] = useState(false);

  const handleCardClick = (event: CardEvent): void => {
    const cardName = event.target.id;
    return isCardCorrect(cardName, leftOverCards) ? nextRound(cardName) : gameOver();
  };

  const nextRound = (cardName: string): void => {
    const correctCard = leftOverCards.find((card) => card.name === cardName);
    if (!correctCard) throw Error('no card found!?');
    setScore(score + getScore(difficulty));
    const nextRoundLefOver = removeCard(correctCard, leftOverCards);
    const nextRoundChosen = addCard(correctCard, chosenCards);
    const nextRoundDifficulty = getDifficulty(round + 1, maxRounds);
    const nextRoundCards = [...getPlayCards(nextRoundDifficulty, nextRoundLefOver, nextRoundChosen)];
    setDifficulty(nextRoundDifficulty);
    setLeftOverCards(nextRoundLefOver);
    setChosenCards(nextRoundChosen);
    setPlayCards(getShuffledArr(nextRoundCards));
    setRound(round + 1);
    if (round === maxRounds) {
      setIsMaxScore(true);
      setHighScore(score);
      setIsGameOver(true);
    }
  };

  const gameOver = (): void => {
    if (score > highScore) setHighScore(score);
    if (isInvincible && round !== maxRounds) return;
    setIsGameOver(true);
  };

  const handleNewGame = (): void => {
    setScore(0);
    setRound(1);
    setLeftOverCards(initialCards);
    setChosenCards([]);
    setPlayCards(firstRoundCards);
    setIsGameOver(false);
    setIsMaxScore(false);
  };

  return (
    <Container>
      <CheatModeBox {...{ setIsDebugMode, setIsInvincible, isDebugMode, isInvincible }} />
      <TopPanel>
        <Instruction />
        <ScoreBoard {...{ round, maxRounds, score, highScore, difficulty }} />
      </TopPanel>
      <CardsContainer>
        {playCards.map((card) => (
          <Card
            handleClick={isGameOver ? null : handleCardClick}
            key={card.name}
            name={card.name}
            imgSrc={card.imgSrc}
          />
        ))}
        {isGameOver && (
          <GameOverModal
            correct={chosenCards.length}
            leftOver={leftOverCards.length}
            isMaxScore={isMaxScore}
            handleNewGame={handleNewGame}
          />
        )}
        {isDebugMode && <DebugBox {...{ leftOverCards, chosenCards, isGameOver, isMaxScore, maxRounds }} />}
      </CardsContainer>
    </Container>
  );
}

export default Body;
