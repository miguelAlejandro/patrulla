import { createStore, combineReducers} from 'redux';
import currentltem from './reducers/currentltem';
import results from './reducers/results';
import suggestions from './reducers/suggestions';

const reducer = combineReducers({
    currentltem,
    results,
    suggestions
});

const store = createStore(reducer);

export default store;