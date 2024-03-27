import { combineReducers } from 'redux';
import allhistoryReducer from './allhistoryReducer';
import userMessageReducer from './userMessageReducer';

const combinedReducers = combineReducers({ allhistoryReducer, userMessageReducer });

export default combinedReducers;

