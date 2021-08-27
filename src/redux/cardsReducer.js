import { FETCH_BOOKS, ADD_MOREBOOKS } from './types';

const initialState = {
	fetchedCards: [],
	isLoadMore: true,
};

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS:
			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}

			const array = [
				...new Map(
					action.payload.items.map((item) => [item.id, item])
				).values(),
			];

			return {
				...state,
				fetchedCards: {
					items: array,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
			};

		case ADD_MOREBOOKS:
			if (action.payload.items.length < 10) {
				state.isLoadMore = false;
			}

			const concatArray = state.fetchedCards.items.concat(action.payload.items);
			const newArray = [
				...new Map(concatArray.map((item) => [item.id, item])).values(),
			];

			return {
				...state,
				fetchedCards: {
					items: newArray,
					kind: action.payload.kind,
					totalItems: action.payload.totalItems,
				},
			};

		default:
			return state;
	}
};
