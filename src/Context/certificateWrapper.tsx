import {FC, ReactElement, useReducer} from "react";
import {Certificate, CertificateContext, CertificateContextType} from "./certificate";

interface Props {
    children: ReactElement;
}

const initialValue: CertificateContextType = {
    isShow: false,
    certificate: {
        id: 0,
        features: [],
        number: 0,
        dateStart: '',
        dateFinish: '',
        direction: '',
        fullName: ''
    },
}

interface Action {
    type: string,
    value: Certificate,
}

const reduce = (state: CertificateContextType, action: Action) => {
    switch (action.type) {
        case "fillData": {
            return {...state, isShow: true, certificate: action.value};
        }
        case "hide": {
            return {...state, isShow: false};
        }
        default:
            return state
    }
}


export const CertificateWrapper: FC<Props> = ({children}: Props) => {
    const [certificate, dispatch] = useReducer(reduce, initialValue);

    const fillData = (data: Certificate) => {
        dispatch({type: "fillData", value: data});
    };

    const hideCart = () => {
        dispatch({type: "hide", value: initialValue.certificate});
    };

    return <CertificateContext.Provider value={{
        certificate: certificate.certificate,
        isShow: certificate.isShow,
        fillData,
    }}>{children}</CertificateContext.Provider>
}