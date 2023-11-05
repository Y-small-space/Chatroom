import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import contactReducer from './reducer/contactReducer'
import allhistoryReducer from './reducer/allhistoryReducer'
import reduxThunk from 'redux-thunk'



const reducer = combineReducers({ contactReducer,allhistoryReducer })

const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store

