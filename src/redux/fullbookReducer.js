import { WRITE_FULLBOOK } from './types';

const initialState = {
	fullbook: [],
	showFullBook: false,
};

export const fullbookReducer = (state = initialState, action) => {
	switch (action.type) {
		case WRITE_FULLBOOK:
			const arrayFullBook = [];
			arrayFullBook.push(action.payload);
			return {
				...state,
				fullbook: arrayFullBook,
				showFullBook: true,
			};

		default:
			return state;
	}
};
