import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer'; 
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
	cards: cardsReducer,
  search: searchReducer,
});