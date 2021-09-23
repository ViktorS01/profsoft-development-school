import {ActionCardState, ActionTypesCard, CardType} from "../../types/card";

const initialState: ActionCardState = {
    isShow : false,
    data : [
        {
            direction: '',
            study: '',
            teacher: '',
            trainingForm: '',
            trainingPeriod: '',
            isShow: false
        }
    ],
    selectBar : {
        value01: 'выберите курс',
        value02: 'период'
    }
}


export const cardReducer = (state = initialState, action: ActionTypesCard) => {
    switch (action.type) {
        case CardType.GET_CARD_ALL: {
            return {...state, ...action.payload};
        }
        case CardType.CARD_IN_PROGRESS: {
            return {...state, in_progress: action.payload};
        }
        case CardType.CHANGE_CARD_FLAG: {
            return {...state, isShow: !state.isShow}
        }
        case CardType.CHANGE_SELECT: {
            return {...state, selectBar : {value01 : action.payload.value01, value02: action.payload.value02}}
        }
        default: {
            return state;
        }
    }
}