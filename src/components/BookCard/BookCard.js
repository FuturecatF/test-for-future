import React from 'react';
import './BookCard.css';
const BookCard = ({ item }) => {
  //  console.log(item.volumeInfo.imageLinks.thumbnail);
	const {
		categories,
		title,
		authors,
	} = item.volumeInfo;
    const defaultImage = 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
    const { thumbnail } = item.volumeInfo.imageLinks || defaultImage;
	const [isCategory, setIsCategory] = React.useState('');
	const [isAuthor, setIsAuthor] = React.useState('');
   // const [isThumbnail, setIsThumbnail] = React.useState('');
// console.log(thumbnail)
	React.useEffect(() => {
		if (categories) {
			const category = categories.join(', ');
			setIsCategory(category);
		}
		if (authors) {
			const author = authors.join(', ');
			setIsAuthor(author);
		}
          /*  if (typeof(thumbnail)!== String) {
            setIsThumbnail('https://images.unsplash.com/photo-1629891960162-ddf7eeb58acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'); 
         }   */
	 
        }, [categories, authors]);

	return (
		<li className='bookscard'>
			  <img className='bookscard__img' src={thumbnail ? thumbnail : defaultImage/*  ? thumbnail : 'https://images.unsplash.com/photo-1629891960162-ddf7eeb58acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' */} alt='#'></img> 
			<div className='bookscard__footer'>
				{isCategory && <p className='bookscard__text'>Категория: {isCategory}</p> }
				<p className='bookscard__text'>Название: {title}</p>
				{isAuthor && <p className='bookscard__text'>Автор: {isAuthor}</p> }
			</div>
		</li>
	);
};

export default BookCard;
