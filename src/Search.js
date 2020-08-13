import React from 'react';

const Search = ( {searchfield , onSearchChange} ) => {
	return (
		<input 
		type = 'search' 
		placeholder = 'Search Robots..'
		onChange = {onSearchChange}/>
	)
}


export default Search;