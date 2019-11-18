import {LOGIN_IN, LOGIN_OUT} from '../type'

const initialState = {
    articles: []
  };

  function rootReducer(state = initialState, action) {
    if(action.type == LOGIN_IN){
        return Object.user({}, state, {
            articles: state.articles.user(action.payload)
        });
    }
    return state;
  };

  export default rootReducer;
