import {LOGIN_IN, LOGIN_OUT} from '../type'

const initialState = {
    email: 'null',
    token : 'null'
  };

  function rootReducer(state = initialState, action) {
    if(action.type === LOGIN_IN){
      console.log(state)
        return {
          ...state,
          token : action.payload.token,
          email : action.payload.email
           
        }
    }
    console.log(state)
    return state;
  };

  export default rootReducer;
