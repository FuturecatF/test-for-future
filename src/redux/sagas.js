import { call, put, takeEvery } from '@redux-saga/core/effects';
import { REQUEST_SEARCH, FETCH_BOOKS, ADD_BOOKS, ADD_MOREBOOKS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_SEARCH, sagaWorker);
  yield takeEvery(ADD_BOOKS, sagaWorkerMoreBooks);
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

// перенести в gapi.js
export async function fetchBooks(searchConfig) {
  //const { word = searchString.searchString.searchString } = searchString;
 // console.log(searchString.searchString)
 
  const { searchWord, startIndex } = searchConfig.searchConfig
 // console.log(searchConfig)
 // console.log(searchWord)
  console.log(startIndex)
 // const searchWord = searchString.searchString.searchString.searchString
 // const { word } = searchString
//  console.log(word)
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}+inauthor&startIndex=${startIndex}&key=AIzaSyAiAERcpGEYcW42YWIGNBdar-rU8L6v5nI`);
  return await response.json(); // &startIndex=${searchString.startIndex}
}