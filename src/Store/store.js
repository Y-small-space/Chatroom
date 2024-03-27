import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import combinedReaducer from './reducer';
import reduxThunk from 'redux-thunk';


const store = createStore(combinedReaducer, applyMiddleware(reduxThunk));

export default store

