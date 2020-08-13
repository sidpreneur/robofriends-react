import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardLoop = robots.map((user , i) => {
		return	<Card key = {i} id = { robots[i].id } username = { robots[i].username } name = { robots[i].name } email = { robots[i].email }/>
	})

	return (
		<div>
			{ cardLoop }
		</div>
	);

}


export default CardList;