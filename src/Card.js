import React from 'react';

const Card = (props) => {
	return (
		<div className = 'tc bg-light-green dib pa3 br2 ma2 grow'>
			<img alt = 'icn'  src = {`https://robohash.org/${props.id}?200*200`}/>
			<h1> {props.name} </h1>
			<h4>{props.username}</h4>
			<p> {props.email} </p>
		</div>



	)
}







export default Card;