import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { addCard, getPlayCards, getShuffledArr, removeCard } from 'src/lib/functions/array';
import { getDifficulty, getScore, isCardCorrect } from 'src/lib/functions/game-logic';
import { CardEvent, TypeCard, TypeDifficulty } from 'src/lib/types';
import styled from 'styled-components';
import Card from './components/Card';
import GameOverModal from './components/GameOverModal';
import Instruction from './components/Instruction';
import { initialCards } from './initialCards';

const Container = styled.section`
  background-color: AliceBlue;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
const TopPanel = styled.section`
  text-align: center;
  background: radial-gradient(#db0917, #8b0912);
  color: white;
  border: solid 4px black;
  padding: 15px 20%;
`;
const ScoreBoard = styled.div``;

const CardsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0% 15%;
  background-color: #ecc0a3;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ec7629' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const maxRounds = initialCards.length + 1;
const firstRoundCards = getPlayCards('easy', initialCards, []);

function Body(): ReactElement {
  const [leftOverCards, setLeftOverCards] = useState(initialCards);
  const [chosenCards, setChosenCards] = useState<TypeCard[]>([]);
  const [playCards, setPlayCards] = useState(firstRoundCards);
  const [round, setRound] = useState(1);
  const [difficulty, setDifficulty] = useState<TypeDifficulty>('easy');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isMaxScore, setIsMaxScore] = useState(false);

  useEffect(() => {
    setDifficulty(getDifficulty(round, maxRounds));
    if (round === maxRounds) {
      setHighScore(score);
      setIsMaxScore(true);
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    const nextRoundCards = [...getPlayCards(difficulty, leftOverCards, chosenCards)];
    setPlayCards(getShuffledArr(nextRoundCards));
  }, [round, difficulty]);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [isGameOver]);

  const handleCardClick = (event: CardEvent): void => {
    const cardName = event.target.id;
    return isCardCorrect(cardName, leftOverCards) ? nextRound(cardName) : gameOver();
  };

  const nextRound = (cardName: string): void => {
    const correctCard = leftOverCards.find((card) => card.name === cardName);
    if (!correctCard) throw Error('no card found!?');
    setScore((prev) => prev + getScore(difficulty));
    setLeftOverCards(removeCard(correctCard, leftOverCards));
    setChosenCards(addCard(correctCard, chosenCards));
    setRound((prevRound) => prevRound + 1);
  };

  const gameOver = (): void => {
    // setIsGameOver(true);
  };

  const handleNewGame = (): void => {
    setScore(0);
    setRound(0);
    setLeftOverCards(initialCards);
    setChosenCards([]);
    setPlayCards(firstRoundCards);
    setIsGameOver(false);
  };

  return (
    <Container>
      <TopPanel>
        <Instruction />
        <ScoreBoard>
          <span>Round: {round} </span>
          <span>Score: {score} </span>
          <span>Highscore: {highScore} </span>
          <span>Difficulty: {difficulty}</span>
          {/* <div>
            {leftOverCards.map((card) => (
              <span key={card.name}>{card.name} </span>
            ))}
          </div> */}
        </ScoreBoard>
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
          <GameOverModal correct={chosenCards.length} leftOver={leftOverCards.length} isMaxScore={isMaxScore}>
            <button onClick={handleNewGame}>New Game!</button>
          </GameOverModal>
        )}
      </CardsContainer>
    </Container>
  );
}

export default Body;
