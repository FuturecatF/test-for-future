import { ADD_SEARCHWORD } from './types';

const initialState = {
	searchWord: '',
    startIndex: 0
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SEARCHWORD:
            console.log(action.payload)
			return { ...state, searchWord: action.payload, startIndex: state.startIndex +=10 };

		default:
			return state;
	}
};
