import {
	REQUEST_SEARCH,
	ADD_BOOKS,
	ADD_SEARCCONFIG,
	SEARCCONFIG_UPDATE,
	GET_FULLBOOK,
	WRITE_FULLBOOK,
} from './types';

export function requestSearch(searchConfig) {
	return {
		type: REQUEST_SEARCH,
		searchConfig,
	};
}

export function getFullBook(selfLink) {
	return {
		type: GET_FULLBOOK,
		selfLink,
	};
}

export function writeFullBook(book) {
	return {
		type: WRITE_FULLBOOK,
		book,
	};
}

export function addSearchConfig(searchConfig) {
	return {
		type: ADD_SEARCCONFIG,
		payload: searchConfig,
	};
}

export function updateSearchConfig(searchConfig) {
	return {
		type: SEARCCONFIG_UPDATE,
		payload: searchConfig,
	};
}

export function addMoreBooks(searchConfig) {
	return {
		type: ADD_BOOKS,
		searchConfig: searchConfig,
	};
}
