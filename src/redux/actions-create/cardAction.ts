import {Dispatch} from "react";
import {CardType} from "../../types/card";
import {ActionTypesCard} from "../../types/card";
import {useCardAll} from "../../hooks/useCardAll";

export const getCardAllAction = () => {
    return async (dispatch: Dispatch<ActionTypesCard>) => {
        dispatch({type: CardType.CARD_IN_PROGRESS, payload: true})
        try{
            const { getCardAllAction } = useCardAll();
            const obj = await getCardAllAction();
            dispatch({ type: CardType.GET_CARD_ALL, payload: obj });
            dispatch({type: CardType.CARD_IN_PROGRESS, payload: true})
        } catch (e){
            dispatch({type: CardType.CARD_IN_PROGRESS, payload: true})
        }
    }
}

export const changeFlagCardAction = () => {
    return async (dispatch: Dispatch<ActionTypesCard>) => {
        dispatch({type: CardType.CHANGE_CARD_FLAG, payload: true});
    }
}

export const changeSelectCardAction = (value01 : string, value02 : string) => {
    return async (dispatch: Dispatch<ActionTypesCard>) => {
        dispatch({type: CardType.CHANGE_SELECT, payload: {value01: value01, value02: value02}});
    }
}