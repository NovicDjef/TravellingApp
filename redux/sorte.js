import { createStore, combineReducers } from "redux";
import { agenceReducer, reservationReducer } from "./Reducer/reducer";


const rootReducer = combineReducers({
    agences: agenceReducer,
    reservation: reservationReducer
})


const store = createStore(rootReducer,)

export default store;

