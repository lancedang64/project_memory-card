import React, { ReactElement } from 'react';
import { TypeDifficulty } from 'src/lib/types';
import styled from 'styled-components';

const Stat = styled.span`
  margin-right: 15px;
  font-weight: bold;
  text-shadow: 1px 1px black;
`;

interface TypeProps {
  round: number;
  maxRounds: number;
  score: number;
  highScore: number;
  difficulty: TypeDifficulty;
}

function ScoreBoard(props: TypeProps): ReactElement {
  return (
    <div>
      <Stat>
        Round: {props.round}/{props.maxRounds}
      </Stat>
      <Stat>Difficulty: {props.difficulty}</Stat>
      <Stat>Score: {props.score}</Stat>
      <Stat>Highscore: {props.highScore}</Stat>
    </div>
  );
}

export default ScoreBoard;
