import React from 'react';
import CardList from './CardList';
import './App.css'
import { robots } from './robots';
import Search from './Search';

class App extends React.Component{
	constructor() {
		super()
		this.state = {
			robots :{ robots },
			searchfield : '',
		}
	}


	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})		
	}





	render() {
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

		})
		return (
		<div>
			<div className = 'tc f2'>
				<h1>RoboFriends</h1>
			</div>
			<div className = 'tc pa3'>
				<Search onSearchChange = {this.onSearchChange}/>
			</div>
			<div>
				<CardList robots = {filteredRobots}/>
			</div>
		</div>
		
		)
	}
}



export default App;