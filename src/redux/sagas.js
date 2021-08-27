import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
	REQUEST_SEARCH,
	FETCH_BOOKS,
	ADD_BOOKS,
	ADD_MOREBOOKS,
	GET_FULLBOOK,
	WRITE_FULLBOOK,
} from './types';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_SEARCH, sagaWorker);
	yield takeEvery(ADD_BOOKS, sagaWorkerMoreBooks);
	yield takeEvery(GET_FULLBOOK, sagaWorkerFullBook);
}

function* sagaWorker(searchConfig) {
	try {
		// add loader
		const payload = yield call(fetchBooks, searchConfig);
		yield put({ type: FETCH_BOOKS, payload });

		// remove loader
	} catch (err) {
		console.log({ message: err.message });
	}
}

function* sagaWorkerMoreBooks(searchConfig) {
	try {
		// add loader
		const payload = yield call(fetchBooks, searchConfig);
		yield put({ type: ADD_MOREBOOKS, payload });
		// remove loader
	} catch (err) {
		console.log({ message: err.message });
	}
}

function* sagaWorkerFullBook(selfLink) {
	try {
		const payload = yield call(getFullBook, selfLink);
		yield put({ type: WRITE_FULLBOOK, payload });
	} catch (err) {
		console.log({ message: err.message });
	}
}

export async function fetchBooks(searchConfig) {
	const {
		searchWord = searchConfig.searchConfig.search,
		startIndex,
		sorting = searchConfig.searchConfig.sorting,
		category = searchConfig.searchConfig.category,
	} = searchConfig.searchConfig;

	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&subject:${category}&orderBy=${sorting}&startIndex=${startIndex}&key=AIzaSyAiAERcpGEYcW42YWIGNBdar-rU8L6v5nI`
	);
	return await response.json();
}

export async function getFullBook(data) {
	const { selfLink } = data;

	const response = await fetch(selfLink);
	return await response.json();
}
