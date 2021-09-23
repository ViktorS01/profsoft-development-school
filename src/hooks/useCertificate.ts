import {Feature} from "../types/certificate";

interface CertificateData {
    number: number;
    fullName: string;
    direction: string;
    dateStart: string;
    dateFinish: string;
    features: Feature[];
    isShowInHome: boolean;
    isShowInArea: boolean;
}

type UseCertificateType = {
    getCertificateAction(): Promise<CertificateData>;
};

function getData(): Promise<CertificateData> {
    return new Promise<CertificateData>((resolve) => {
        setTimeout(
            () => resolve({ fullName: "Пупкин Иван Иванович",
                dateStart: "01.01.0001", dateFinish: "07.08.2021", number: 32423432432, direction: "Front",
                features: [{id: 1, name: "Figma"}, {id: 2, name: "Sigma"}, {id: 2, name: "Paradigma"}],
                isShowInHome: false, isShowInArea: true}),
            2000
        );
    });
}
export const useCertificate = (): UseCertificateType => {
    const getCertificateAction = async () => {
        const result = await getData();
        return result;
    };
    return {
        getCertificateAction,
    };
};