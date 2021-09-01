import React, { ReactElement } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 3;
  position: absolute;
  top: 40%;
  background: blanchedalmond;
  padding: 50px 100px;
`;

const BlackOverlay = styled.div`
  z-index: 2;
  position: fixed;
  background: gray;
  width: 100%;
  height: 100%;
  opacity: 50%;
`;

interface TypeProps {
  correct: number;
  leftOver: number;
  isMaxScore: boolean;
  children?: ReactNode;
}

function GameOverModal({ correct, leftOver, isMaxScore, children }: TypeProps): ReactElement {
  return (
    <>
      <BlackOverlay></BlackOverlay>
      <Container>
        {isMaxScore ? (
          <>
            <h2>Game Over!</h2>
            <h2>Plus Ultraaaa!!!!</h2>
            <p>Congratulations!!! You got everything right and achieved the maximum score!</p>
          </>
        ) : (
          <>
            <h2>Game Over!</h2>
            <p>Good job! You made {correct} correct choices! </p>
            <p>Only {leftOver} unique cards left over!</p>
          </>
        )}
        {children}
      </Container>
    </>
  );
}

export default GameOverModal;
