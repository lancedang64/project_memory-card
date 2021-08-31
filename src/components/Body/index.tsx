import React, { ReactElement } from 'react';
import styled from 'styled-components';

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
`;

function Body(): ReactElement {
  return (
    <Container>
      <TopPanel>
        <h2>Instruction</h2>
        <ScoreBoard>
          <span>Score:</span>
          <span>Highscore:</span>
        </ScoreBoard>
      </TopPanel>
      <CardsContainer>CardsContainer</CardsContainer>
    </Container>
  );
}

export default Body;
