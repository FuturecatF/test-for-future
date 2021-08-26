import { REQUEST_SEARCH, ADD_BOOKS, ADD_SEARCHWORD } from './types';

export function requestSearch(searchConfig) {
	return {
		type: REQUEST_SEARCH,
		searchConfig,
	};
}

export function addMoreBooks(searchConfig) {
	return {
		type: ADD_BOOKS,
		searchConfig: searchConfig,
	};
}

export function addSearchWord(searchConfig) {
	return {
		type: ADD_SEARCHWORD,
		payload: searchConfig,
	};
}
