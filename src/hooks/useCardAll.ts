import {SelectBar} from "../types/card";

export type CardState = {
    isShow: boolean;
    data : CardStateArray[];
    selectBar: SelectBar;
}

export type CardStateArray = {
    direction: string;
    study: string;
    trainingForm: string;
    trainingPeriod: string;
    teacher: string;
    isShow: boolean;
}

const dataAll : CardState = {
    data : [
        { direction: 'Design', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'Frontend', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'Backend', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'IOS', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'Android', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'QA', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
        { direction: 'PM', study: 'Создание макетов и прототипов Web и' +
                ' Мобильных приложения для платформ iOS, Android в Figma. Изучение UXPin, практическое применение' +
                ' полученных знаний', teacher: 'Щелкунова Юлия Сергеевна', trainingForm: 'очная',
            trainingPeriod: '01.07.2021-30.08.2021', isShow: false},
    ],
    isShow: false,
    selectBar : {
        value01: 'все',
        value02: 'период'
    }

}

type UseCardType = {
    getCardAllAction(): Promise<CardState>;
};

export const useCardAll = () : UseCardType => {
    const getCardAllAction = async () => {
        return new Promise<CardState>((resolve) => {
            setTimeout(
                () => resolve(dataAll),
                2000
            );
        });
    };
    return {
        getCardAllAction,
    };
};
