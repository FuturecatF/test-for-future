import React from 'react';
import './App.css';
import { requestSearch } from '../../redux/actions';
import { addMoreBooks } from '../../redux/actions';
import { addSearchWord } from '../../redux/actions';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Books from '../Books/Books';
function App() {
	const dispatch = useDispatch();

	/* const [isSearchConfig, SetIsSearchConfig] = React.useState({
    searchString: '',
    startIndex: 0
  }) */
	// console.log(isSearchConfig)

	const searchWord = useSelector((state) => state.search.searchWord);
	const startIndex = useSelector((state) => state.search.startIndex);
	const books = useSelector((state) => state.cards.fetchedCards.items);
	// const startIndex = useSelector((state) => state.cards.startIndex);

	function handleClickMoreBooks() {
		// SetIsSearchConfig({searchString: searchString})
		//console.log(searchString)
	//	console.log(startIndex);
		const searchConfig = {
			searchWord,
			startIndex /* : books.length */,
		};
		// SetIsSearchConfig({startIndex: startIndex})
		dispatch(addMoreBooks(searchConfig));
		dispatch(addSearchWord(searchConfig));
	}

	/* React.useEffect(() => {

    if (searchWord) {
      SetIsSearchConfig({ searchString: searchWord })
      console.log(isSearchConfig)
    }
    }, [searchWord]) */

	function handleSearchSubmit(searchString) {
		console.log(searchString)
		const searchWord = searchString.input;
		//const startIndex = 0;
		const searchConfig = { searchWord, startIndex };
		// SetIsSearchConfig({searchString: searchString, startIndex: 0})
		//if (isSearchConfig.searchString) {
		dispatch(addSearchWord(searchString));
		dispatch(requestSearch(searchConfig));
		// }

		//  console.log(isSearchConfig)
	}

	return (
		<div className='page'>
			<div className='page__container'>
				<Header onSubmit={handleSearchSubmit} />
				<Books books={books} onClickMore={handleClickMoreBooks} />
			</div>
		</div>
	);
}

export default App;
