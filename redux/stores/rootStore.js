import { createStore, combineReducers } from 'redux';
import territoriesReducer from '../reducers/territoriesReducer';

const rootReducer = combineReducers({ territories: territoriesReducer });

export default rootStore = createStore(rootReducer);
