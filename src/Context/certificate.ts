import {createContext} from "react";

interface Feature {
    id: number;
    name: string;
}

export interface Certificate {
    id: number;
    number: number;
    fullName: string;
    direction: string;
    dateStart: string;
    dateFinish: string;
    features: Feature[];
}

export interface CertificateContextType {
    certificate: Certificate;
    isShow: boolean;
}

type CertificateContextTypeToggle = {
    fillData(certificate: Certificate): void;
} & CertificateContextType

const toggle = (certificate: Certificate) => {
    console.log(certificate);
}

const hideCart = () => {
    console.log("sdf");
}

export const CertificateContext =
    createContext<CertificateContextTypeToggle>({
        certificate: {
            id: 0,
            features: [],
            number: 0,
            dateStart: '',
            dateFinish: '',
            direction: '',
            fullName: ''
        },
        isShow: false,
        fillData: toggle,
    });