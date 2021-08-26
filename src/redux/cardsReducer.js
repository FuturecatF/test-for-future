import { FETCH_BOOKS, ADD_MOREBOOKS } from './types';

const initialState = {
	fetchedCards: [],
	startIndex: 10,
	searchWord: '',
};

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS:
			// console.log(action.payload)

			// console.log(action.payload.items)
			/*  const booksArray = action.payload.items.map((item) => {
				return {
				  ...item,
				  ...item.volumeInfo.imageLinks.thumbnail: item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'https://images.unsplash.com/photo-1629891960162-ddf7eeb58acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
				  
				};
			  });  */

			return { ...state, fetchedCards: action.payload };

		case ADD_MOREBOOKS:
			//console.log(action)
			const newArray = state.fetchedCards.items.concat(action.payload.items);
			// console.log(state.fetchedCards)
			return {
				...state,
				fetchedCards: {
					items: newArray,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
				startIndex: (state.startIndex += 10),
				searchWord: state.searchWord,
			};

		default:
			return state;
	}
};
