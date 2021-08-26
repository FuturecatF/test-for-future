import React from 'react';
import './Books.css';
import BookCard from '../BookCard/BookCard';

const Books = ({  books, onClickMore  }) => {
	
	//console.log(books);
   

    function handleMoreBooks() {
        onClickMore();
    }

	return (
        <section className="books">
		<ul className="books-items">
			 {books && books.map((item) => (
				<BookCard item={item} key={item.id} />
			))} 
		</ul>
       {books && <button type="button" className="books__btn" onClick={handleMoreBooks} >more</button>} 
        </section>
	);
};

export default Books;
