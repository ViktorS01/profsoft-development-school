import {CertificateType, ActionTypes, ActionCertificateState} from '../../types/certificate';

const initialState : ActionCertificateState = {
    number: 0,
    fullName: "",
    dateFinish: "",
    dateStart: "",
    direction: "",
    features: [{id: 0, name: ""},{id: 1, name: ""},{id: 2, name: ""}],
    isShowInHome: false,
    isShowInArea: true,
    in_progress: false
}
export const certificateReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case CertificateType.GET_CERTIFICATE: {
            return {...state, ...action.payload};
        }
        case CertificateType.DELETE_CERTIFICATE: {
            return {...state, number: 0, fullName: "", dateFinish: "", dateStart: "", direction: "",
                features: [{id: 0, name: ''},{id: 1, name: ''},{id: 2, name: ''}]};
        }
        case CertificateType.CHANGE_CERTIFICATE_FLAG_IN_HOME: {
            return {...state, isShowInHome: !state.isShowInHome};
        }
        case CertificateType.IN_PROGRESS: {
            return {...state, in_progress: action.payload};
        }
        default: {
            return state;
        }
    }
}