export type CardState = {
    isShow : boolean;
    data : CardStateArray[];
    selectBar : SelectBar;
}

export type SelectBar = {
    value01 : string;
    value02 : string;
}

export type CardStateArray = {
    direction: string;
    study: string;
    trainingForm: string;
    trainingPeriod: string;
    teacher: string;
    isShow: boolean;
}

export enum CardType {
    CARD_IN_PROGRESS = 'CARD_IN_PROGRESS',
    CHANGE_CARD_FLAG = 'CHANGE_CARD_FLAG',
    GET_CARD_ALL = 'GET_CARD_ALL',
    CHANGE_SELECT = 'CHANGE_SELECT',
}

interface ProgressCardActionType {
    type: 'GET_CARD_ALL',
    payload: CardState
}

interface GetCardAllActionType {
    type: 'CARD_IN_PROGRESS',
    payload: boolean
}

interface ChangeSelectActionType {
    type: 'CHANGE_SELECT',
    payload: SelectBar
}

interface ChangeFlagCardActionType {
    type: 'CHANGE_CARD_FLAG',
    payload: boolean
}

export type ActionTypesCard = ProgressCardActionType | ChangeFlagCardActionType |
    GetCardAllActionType | ChangeSelectActionType;

export interface ActionCardState {
    isShow : boolean;
    data : CardStateArray[];
    selectBar : object;
}
