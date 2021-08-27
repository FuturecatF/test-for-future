import React from 'react';
import './Books.css';
import BookCard from '../BookCard/BookCard';
import { useSelector } from 'react-redux';
const Books = ({ books, onClickMore }) => {
	const isLoadMore = useSelector((state) => state.cards.isLoadMore);
	
	function handleMoreBooks() {
		onClickMore();
	}

	return (
		<section className='books'>
			<ul className='books-items'>
				{books && books.map((item) => <BookCard item={item} key={item.id} />)}
			</ul>

			{isLoadMore && books.length && (
				<button
					type='button'
					className='books__btn'
					onClick={handleMoreBooks}
					disabled={!isLoadMore}
				>
					more
				</button>
			)}
		</section>
	);
};

export default Books;
