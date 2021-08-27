import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';
function Header({ onSearch }) {
	return (
		<header className='header'>
			<SearchForm onSearch={onSearch} />
		</header>
	);
}

export default Header;
