import { LOGIN_IN, LOGIN_OUT } from '../type'

const initialState = {
  email: 'admin@gmail.com',
  token: 'admin',
  name: 'admin',
  image: '',
  role: 'Admin'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN:
      console.log(state);
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        name:  action.payload.name,
        image: action.payload.image,
        role: action.payload.role,

      };
    case LOGIN_OUT:
      console.log(state);
      return {
        ...state,
        token: null,
        email: null,
        name:  null,
        image: null,
        role: null

      };

    default:
      return state;

  };
}

export default rootReducer;
