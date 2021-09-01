import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { addCard, getPlayCards, getShuffledArr, removeCard } from 'src/lib/functions/array';
import { getDifficulty, getScore, isCardCorrect } from 'src/lib/functions/game-logic';
import { CardEvent, TypeCard, TypeDifficulty } from 'src/lib/types';
import styled from 'styled-components';
import Card from './components/Card';
import GameOverModal from './components/GameOverModal';
import { initialCards } from './initialCards';

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
    setIsGameOver(false);
    setPlayCards(firstRoundCards);
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
          <div>
            {leftOverCards.map((card) => (
              <span key={card.name}>{card.name} </span>
            ))}
          </div>
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
