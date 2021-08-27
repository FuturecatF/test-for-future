import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';
function Header({ onSearch }) {
	

	/* function handleSubmit(e) {
		e.preventDefault();
		if (valueForSearch.input) {
			onSubmit(valueForSearch);
		} else console.log('Введите слово для поиска');
	} */
//	console.log(valueForSearch);
	//вынести форму в отдельный компонент
	return (
		<header className='header'>
			<SearchForm onSearch={onSearch}/>
			
		</header>
	);
}

export default Header;
