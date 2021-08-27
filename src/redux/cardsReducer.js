import { FETCH_BOOKS, ADD_MOREBOOKS } from './types';

const initialState = {
	fetchedCards: [],
	isLoadMore: true,
};

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS:
			//	console.log(action.payload);

			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}

			console.log('FETCH_BOOKS', action.payload.items);

			// const array = action.payload.items.filter((item) => item.id !== item.id)
			const array = [
				...new Map(
					action.payload.items.map((item) => [item.id, item])
				).values(),
			];

			/*  const booksArray = action.payload.items.map((item) => {
				return {
				  ...item,
				  ...item.volumeInfo.imageLinks.thumbnail: item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'https://images.unsplash.com/photo-1629891960162-ddf7eeb58acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
				  
				};
			  });  */

			return {
				...state,
				fetchedCards: {
					items: array,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
			};

		case ADD_MOREBOOKS:
			// console.log(action.payload.items.length)
			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}
			/* if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			} */
			const concatArray = state.fetchedCards.items.concat(action.payload.items);
			const newArray = [
				...new Map(
					concatArray.map((item) => [item.id, item])
				).values(),
			];
			// console.log(state.fetchedCards)
			return {
				...state,
				fetchedCards: {
					items: newArray,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
				//isLoadMore: getActualLoadStatus(action.payload.items.length)
			};

		default:
			return state;
	}
};
