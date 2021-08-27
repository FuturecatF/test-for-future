import React from 'react';
import './BookPage.css';
import FullBook from '../FullBook/FullBook';

const BookPage = ({ fullbook }) => {
	return (
		<section className="bookpage">
			<ul className='bookpage__list'>
				{fullbook &&
					fullbook.map((item) => <FullBook item={item} key={item.id} />)}
			</ul>
		</section>
	);
};

export default BookPage;
