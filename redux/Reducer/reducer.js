import * as ActionType from "../Types/type"
import data from "../../src/constants/data"

initialState = {
    agences : data.agenceVoyage,
    loadingAgneces: false,
    errorAgence: null,
    loadingReservation: false,
    errorReservation: null
};

export const agenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.AGENCE_LOADING:
            return {
                ...state,
                loadingAgneces: true,
                errorAgence: null
            };
        case ActionType.AGENCE_SUCCESS:
            return {
                ...state,
                loadingAgneces: false,
                agences: action.payload
            };
        case ActionType.AGENCE_FAILED: 
            return {
                ...state,
                loadingAgneces: false,
                errorAgence: action.payload
            }
                
        default:
            return state;
    }
}

export const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.RESERVATION_LOADING:
            return {
                ...state,
                loadingReservation: true,
                errorReservation: null
            };
        case ActionType.RESERVATION_SUCCESS:
            return {
                ...state,
                loadingReservation: false,
            };
        case ActionType.RESERVATION_FAILED: 
            return {
                ...state,
                loadingReservation: false,
                errorReservation: action.payload
            }      
        default:
            return state;
    }
}