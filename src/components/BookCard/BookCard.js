import React from 'react';
import './BookCard.css';
import { getFullBook } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import {
	useHistory,
} from 'react-router-dom';
const BookCard = ({ item }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { categories, title, authors } = item.volumeInfo;

	const defaultImage =
		'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
	const { thumbnail } = item.volumeInfo.imageLinks || defaultImage;
	const [isCategory, setIsCategory] = React.useState('');
	const [isAuthor, setIsAuthor] = React.useState('');

	React.useEffect(() => {
		if (categories) {
			const category = categories.join(', ');
			setIsCategory(category);
		}
		if (authors) {
			const author = authors.join(', ');
			setIsAuthor(author);
		}
	}, [categories, authors]);

	function handleClickBook() {
		dispatch(getFullBook(item.selfLink))
		history.push('/book');
	}

	return (
		<li className='bookscard' onClick={handleClickBook}>
			<img
				className='bookscard__img'
				src={
					thumbnail
						? thumbnail
						: defaultImage 
				}
				alt='#'
			></img>
			<div className='bookscard__footer'>
				{isCategory && (
					<p className='bookscard__text'>Категория: {isCategory}</p>
				)}
				<p className='bookscard__text'>Название: {title}</p>
				{isAuthor && <p className='bookscard__text'>Автор: {isAuthor}</p>}
			</div>
		</li>
	);
};

export default BookCard;
