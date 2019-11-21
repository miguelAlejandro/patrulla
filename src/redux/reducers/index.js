import { LOGIN_IN, LOGIN_OUT } from '../type'

const initialState = {
  email: 'admin',
  token: 'admin',
  patrullas: [{}],
  sensores: [{}]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN:
      console.log(state);
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email

      };
    case LOGIN_OUT:
      console.log(state);
      return {
        ...state,
        token: null,
        email: null

      };

    default:
      return state;

  };
}

export default rootReducer;
