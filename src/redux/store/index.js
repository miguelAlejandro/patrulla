import { createStore } from "redux";
import rootReducer from "../reducers/index";
// import {obtenerStateStorage, guardarStateStorage} from '../../localstorage'

// Obtener citas de localstorage
// const storageState =  obtenerStateStorage();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe( () => {
//     guardarStateStorage({
//         user: store.getState().user
//     })
// } )

export default store;
