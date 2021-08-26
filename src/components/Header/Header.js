import React from 'react';
import './Header.css';
function Header({ onSubmit }) {
	const [valueForSearch, setIsValueForSearch] = React.useState({
		input: '',
		select: 'relevance',
	});

	function handleChangeInput(e) {
		setIsValueForSearch({
			input: e.target.value,
			select: valueForSearch.select,
		});
	}

	function handleChangeSelect(e) {
		setIsValueForSearch({
			input: valueForSearch.input,
			select: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (valueForSearch.input) {
			onSubmit(valueForSearch);
		} else console.log('Введите слово для поиска');
	}
	console.log(valueForSearch);
	return (
		<header className='header'>
			<form className='header__form' onSubmit={handleSubmit}>
				<input
					value={valueForSearch.input}
					onChange={handleChangeInput}
					className='header__form-input'
					name='input'
				></input>

				<button className='header__form-btn' type='submit'>
					Поиск
				</button>
				<select
					className='header__form-select'
					onChange={handleChangeSelect}
					defaultValue={valueForSearch.select}
				>
					<option value='relevance'>relevance</option>
					<option value='newest'>newest</option>
				</select>
			</form>
		</header>
	);
}

export default Header;
