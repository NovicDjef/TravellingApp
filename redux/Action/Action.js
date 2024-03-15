import * as ActionType from '../Types/type'


// action de chargement d'une agence
export const fetchAgence = () => ({
    type: ActionType.AGENCE_LOADING
});

export const fetchAgenceSuccess = (agences) => ({
    type: ActionType.AGENCE_SUCCESS,
    payload: agences
});

export const fetchAgenceFailed = (error) => ({
    type: ActionType.AGENCE_FAILED,
    payload: error
});

// Action reservation de billet de voyage

export const reservationRequest = (billetInfo) => ({
    type: ActionType.RESERVATION_LOADING,
    payload: billetInfo
})

export const reservationSuccess = () => ({
    type: ActionType.RESERVATION_SUCCESS
})

export const reservationFailed = (error) => ({
    type: ActionType.RESERVATION_FAILED,
    payload: error
})