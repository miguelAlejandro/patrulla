import { createStore, combineReducers} from 'redux';

import currentltem from './reducers/currentltem';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import login from './reducers/login';
const reducer = combineReducers({
    currentltem,
    results,
    suggestions,
    login
});

const store = createStore(reducer);

export default store;