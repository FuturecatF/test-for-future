import React from 'react';
import './FullBook.css';

const FullBook = ({ item }) => {
	const { title, authors, categories, imageLinks, description } =
		item.volumeInfo;

	const [isCategory, setIsCategory] = React.useState('');
	const [isAuthor, setIsAuthor] = React.useState('');

	React.useEffect(() => {
		if (categories) {
			const category = categories.join(' / ');
			setIsCategory(category);
		}
		if (authors) {
			const author = authors.join(', ');
			setIsAuthor(author);
		}
	}, [categories, authors]);

	const imageSmall = imageLinks.small;
	const imageLarge = imageLinks.large;

	return (
		<li className='fullbook'>
			<div className='fullbook__container-img'>
				<img
					className='fullbook__img'
					src={imageSmall ? imageSmall : imageLarge}
					alt={title}
				></img>
			</div>

			<div className='fullbook__container'>
				{isCategory && <p className='fullbook__category'>{isCategory}</p>}
				<h3 className='fullbook__title'>{title}</h3>
				{isAuthor && <p className='fullbook__author'>{isAuthor}</p>}
				<p className='fullbook__description'>{description}</p>
			</div>
		</li>
	);
};

export default FullBook;
