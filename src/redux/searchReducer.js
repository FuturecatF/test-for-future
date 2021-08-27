import { ADD_SEARCCONFIG, SEARCCONFIG_UPDATE } from './types';

const initialState = {
	searchWord: '',
	startIndex: 0,
	sorting: '',
	category: '',
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SEARCCONFIG:
			return {
				...state,
				searchWord: action.payload.searchWord,
				startIndex: action.payload.startIndex,
				sorting: action.payload.sorting,
				category: action.payload.category,
			};
		case SEARCCONFIG_UPDATE:
			return {
				...state,
				searchWord: action.payload.search,
				startIndex: (state.startIndex += 10),
				sorting: action.payload.sorting,
				category: action.payload.category,
			};

		default:
			return state;
	}
};
