import React from 'react';
import styled from 'styled-components';

const ScoreBoard = styled.div``;
const CardsContainer = styled.div``;

function Body() {
	return (
		<section>
			<h2>Instruction</h2>
			<ScoreBoard>
				<span>Score:</span>
				<span>Highscore:</span>
			</ScoreBoard>
			<CardsContainer></CardsContainer>
		</section>
	);
}

export default Body;
