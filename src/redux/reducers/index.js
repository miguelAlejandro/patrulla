import {LOGIN_IN, LOGIN_OUT} from '../type'

const initialState = {
    articles: []
  };

  function rootReducer(state = initialState, action) {
    if(action.type == LOGIN_IN){
      console.log(state)
        return Object.user({}, state, {
            articles: state.articles[0].user(action.payload)
           
        });
    }
    console.log(state)
    return state;
  };

  export default rootReducer;
