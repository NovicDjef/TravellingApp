import { CreateStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { agenceReducer, reservationReducer } from "./Reducer/reducer";


const rootReducer = combineReducers({
    agences: agenceReducer,
    reservation: reservationReducer
})


const store = CreateStore(rootReducer, applyMiddleware(thunk))

export default store;

