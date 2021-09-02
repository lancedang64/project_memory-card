import React, { ReactElement } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface MyProps {
  flexDirection?: string;
}

const Container = styled.div`
  z-index: 3;
  position: absolute;
  top: 40%;
  background: blanchedalmond;
  padding: 50px 100px;
  display: flex;
  flex-direction: ${(props: MyProps): string => props.flexDirection || 'column'};
  align-items: center;
`;

const BlackOverlay = styled.div`
  z-index: 2;
  position: fixed;
  background: gray;
  width: 100%;
  height: 100%;
  opacity: 50%;
`;

const ButtonStyled = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
`;

const AllMight = styled.img`
  height: 200px;
`;

const AllMight2 = styled.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  height: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TypeProps {
  correct: number;
  leftOver: number;
  isMaxScore: boolean;
  handleNewGame: () => void;
}

function GameOverModal({ correct, leftOver, isMaxScore, handleNewGame }: TypeProps): ReactElement {
  return (
    <>
      <BlackOverlay></BlackOverlay>
      <Container flexDirection={isMaxScore ? 'row' : 'column'}>
        {isMaxScore ? (
          <>
            <AllMight src="../images/All_Might_Approve.png" />
            <StyledDiv>
              <h2>Game Over!</h2>
              <h2>Plus Ultraaaa!!!! All Mights Approved!!</h2>
              <p>Congratulations!!! You got everything right and achieved the maximum score!</p>
              <ButtonStyled onClick={handleNewGame}>New Game!</ButtonStyled>
            </StyledDiv>
            <AllMight2 src="../images/All_Might_Approve.png" />
          </>
        ) : (
          <>
            <h2>Game Over!</h2>
            <p>Good job! You made {correct} correct choices! </p>
            <p>Only {leftOver} unique cards left over!</p>
            <ButtonStyled onClick={handleNewGame}>New Game!</ButtonStyled>
          </>
        )}
      </Container>
    </>
  );
}

export default GameOverModal;
