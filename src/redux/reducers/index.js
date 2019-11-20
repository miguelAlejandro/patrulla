import {LOGIN_IN, LOGIN_OUT} from '../type'

const initialState = {
    articles: [],
    user: {}
  };

  function rootReducer(state = initialState, action) {
    if(action.type == LOGIN_IN){
      console.log(state)
        return {
          ...state,
          user : action.payload
           
        }
    }
    console.log(state)
    return state;
  };

  export default rootReducer;
