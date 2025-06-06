
import { combineReducers } from 'redux';
import CardReducer from './CardReducer';

const rootReducer = combineReducers({
  cart: CardReducer
});

export default rootReducer;
