import React from 'react';
import styled from 'styled-components';

const Container = styled.span``;
const Picture = styled.img``;
const Name = styled.span``;

function Card({ name, imgUrl }) {
	return (
		<Container>
			<Picture src={imgUrl}></Picture>
			<Name>{name}</Name>
		</Container>
	);
}

export default Card;
