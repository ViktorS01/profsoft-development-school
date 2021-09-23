import { ActionState } from "../types/auth";
import {CertificateState} from '../types/certificate';
import {CardState, CardStateArray} from '../types/card';

export type RootStateAuth = {
    auth: ActionState;
};

export type RootStateCertificate = {
    certificate: CertificateState;
}

export type RootStateCard = {
    card: CardState;
}