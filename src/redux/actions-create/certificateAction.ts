import {Dispatch} from "react";
import {CertificateType} from "../../types/certificate";
import {useCertificate} from "../../hooks/useCertificate";
import {ActionTypes} from "../../types/certificate";

export const getCertificateAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({type: CertificateType.IN_PROGRESS, payload: true});
        try{
            const { getCertificateAction } = useCertificate();
            const obj = await getCertificateAction();
            dispatch({ type: CertificateType.GET_CERTIFICATE, payload: obj });
            dispatch({ type: CertificateType.IN_PROGRESS, payload: false });
        } catch (e){
            dispatch({ type: CertificateType.IN_PROGRESS, payload: false });
        }
    }
}

export const deleteCertificateAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({type: CertificateType.DELETE_CERTIFICATE, payload: true});
    }
}

export const changeFlagActionInHome = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({type: CertificateType.CHANGE_CERTIFICATE_FLAG_IN_HOME, payload: true});
    }
}