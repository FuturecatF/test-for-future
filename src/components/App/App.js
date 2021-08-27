import React from 'react';
import './App.css';

/* REDUX */
import {
	requestSearch,
	addMoreBooks,
	addSearchConfig,
	updateSearchConfig,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

/* КОМПОНЕНТЫ */
import Header from '../Header/Header';
import Books from '../Books/Books';
import BookPage from '../BookPage/BookPage';

/* ROUTES */
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [isBooksArray, setIsBooksArray] = React.useState([]);

const { searchWord, sorting, category } = useSelector((state) => state.search);
const index = useSelector((state) => state.search.startIndex);
	
	const books = useSelector((state) => state.cards.fetchedCards.items);

	const { fullbook, showFullBook } = useSelector((state) => state.fullbook);
//	const showFullBook = useSelector((state) => state.fullbook.showFullBook);

	/* Кнопка MORE добавляет больше книг */
	function handleClickMoreBooks() {
		console.log('searchWord', searchWord);

		if (books.length) {
			const startIndex = index + 10;
			const searchConfig = {
				search: searchWord,
				startIndex: startIndex,
				sorting: sorting,
				category: category,
			};
			dispatch(addMoreBooks(searchConfig));
			dispatch(updateSearchConfig(searchConfig));
		}
	}

	/* Поиск книг */
	function handleSearchSubmit(searchString) {
		const searchWord = searchString.search;
		const sorting = searchString.sorting;
		const category = searchString.category;
		const startIndex = 0;

		const searchConfig = { searchWord, startIndex, sorting, category };
		console.log('App Submit', searchConfig);
		dispatch(requestSearch(searchConfig));
		dispatch(addSearchConfig(searchConfig));

		setIsBooksArray([]);
		history.push('/');
	}

	/* Вывод только конкретной категории или всех сразу */
	React.useEffect(() => {
		if (books) {
			const itemExist = books.filter((item) => {
				if (item.volumeInfo.categories && category) {
					return typeof item === 'object';
				}
				return null;
			});

			const array = itemExist.filter((item) => {
				function upFirst(str) {
					if (!str) return str;

					return str[0].toUpperCase() + str.slice(1);
				}

				return item.volumeInfo.categories.includes(upFirst(category));
			});

			if (category !== '') {
				setIsBooksArray(array);
			} else setIsBooksArray(books);
		}
	}, [books, category]);

	return (
		<div className='page'>
			<div className='page__container'>
				<Header onSearch={handleSearchSubmit} />
				<Switch>
					<Route exact path='/'>
						<Books books={isBooksArray} onClickMore={handleClickMoreBooks} />
					</Route>
					<Route exact path='/book'>
						<BookPage fullbook={fullbook} />
					</Route>
				</Switch>
				<Route path='/'>
					{!showFullBook ? <Redirect to='/' /> : <Redirect to='/book' />}
				</Route>
			</div>
		</div>
	);
}

export default App;
