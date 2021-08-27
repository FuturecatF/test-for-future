import React from 'react';
import './SearchForm.css';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onSearch }) => {
	const form = useForm({ mode: 'onChange' });
	const {
		reset,
		register,
		//formState: { errors },
		handleSubmit,
	} = form;
	const { isValid } = form.formState;
	const onSubmit = (data) => {
		// setValidation(false);
		
			console.log(data);
		

		 onSearch(data);
		reset();
	};

	return (
		<form className='searchform' onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className="searchform__fieldset">
			<input
				className='searchform__input'
				name='input'
                placeholder="Название книги"
				{...register('search', { required: true, })}
			></input>

			<button className='searchform__btn' type='submit' disabled={!isValid}>
				Поиск
			</button>
            </fieldset>
            <fieldset className="searchform__fieldset">
			<select
				className='searchform__select'
				name='relevance'
				{...register('sorting')}
			>
				<option value='relevance'>relevance</option>
				<option value='newest'>newest</option>
			</select>

			<select
				className='searchform__select'
				name='category'
				{...register('category')}
			>
				<option value=''>all</option>
				<option value='art'>art</option>
                <option value='biography'>biography</option>
                <option value='computers'>computers</option>
                <option value='history'>history</option>
                <option value='medical'>medical</option>
                <option value='poetry'>poetry</option>
			</select>
            </fieldset>
		</form>
	);
};

export default SearchForm;
