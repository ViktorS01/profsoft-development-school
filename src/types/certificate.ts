interface GetCertificateActionType {
    type: CertificateType.GET_CERTIFICATE;
    payload: {
        number: number;
        fullName: string;
        direction: string;
        dateStart: string;
        dateFinish: string;
        features: Feature[];
        isShowInHome: boolean;
        isShowInArea: boolean;
    };
}

interface DeleteCertificateActionType {
    type: CertificateType.DELETE_CERTIFICATE;
    payload: boolean;
}

interface ChangeFlagCertificateActionType {
    type: CertificateType.CHANGE_CERTIFICATE_FLAG_IN_HOME;
    payload: boolean;
}

interface StateCertificateActionType {
    type: CertificateType.IN_PROGRESS;
    payload: boolean;
}

export interface ActionCertificateState {
    number: number;
    fullName: string;
    direction: string;
    dateStart: string;
    dateFinish: string;
    features: Feature[];
    isShowInHome: boolean;
    isShowInArea: boolean;
    in_progress: boolean;
}

export type ActionTypes = GetCertificateActionType | DeleteCertificateActionType |
    StateCertificateActionType | ChangeFlagCertificateActionType;


export enum CertificateType{
    GET_CERTIFICATE = 'GET_CERTIFICATE',
    DELETE_CERTIFICATE = 'DELETE_CERTIFICATE',
    CHANGE_CERTIFICATE_FLAG_IN_HOME = 'CHANGE_CERTIFICATE_FLAG_IN_HOME',
    IN_PROGRESS = 'IN_PROGRESS',
}

export interface Feature {
    id: number;
    name: string;
}

export type CertificateState = {
    number: number;
    fullName: string;
    direction: string;
    dateStart: string;
    dateFinish: string;
    features: Feature[];
    isShowInHome: boolean;
    isShowInArea: boolean;
}