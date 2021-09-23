import React, {useState} from "react";
import classes from "./selectCoursesComponent.module.scss";
import {ReactComponent as Select} from "../../../assets/selectInput.svg";
import {ReactComponent as Arrow} from "../../../assets/arrow.svg";
import {SelectType} from "../../../types/selects";
import {ReactComponent as Close} from "../../../assets/closeCard.svg";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {changeFlagCardAction, changeSelectCardAction, getCardAllAction} from "../../../redux/actions-create/cardAction";
import {useActions} from "../../../hooks/useAction";

export const SelectCoursesComponent = () => {

    const stateData = useTypedSelector((state) => state.card);
    const { changeSelectCardAction, getCardAllAction, changeFlagCardAction } = useActions();

    const initialState = {
        select01: {
            id: 0,
            isActive: false,
            initialValue: 'выберите курс',
            width: '295px',
            links: [
                {key: '01', value: 'все'},
                {key: '02', value: 'Frontend'},
                {key: '03', value: 'Backend'},
                {key: '04', value: 'IOS'},
                {key: '05', value: 'Android'},
                {key: '06', value: 'Design'},
                {key: '07', value: 'QA'},
                {key: '08', value: 'PM'},
            ]
        },
        select02: {
            id: 1,
            isActive: false,
            initialValue: 'период',
            width: '215px',
            links: [
                {key: '01', value: 'месяц'},
                {key: '02', value: 'два'},
                {key: '03', value: 'три'},
                {key: '04', value: 'четыре'},
            ]
        }
    }


    const [state, setState] = useState(initialState);

    const changeState = (idButton: number) => {
        const newState = {
            select01: {
                ...state.select01,
                isActive: idButton === 0 ? !state.select01.isActive : state.select01.isActive,
            },
            select02: {
                ...state.select02,
                isActive: idButton === 1 ? !state.select02.isActive : state.select02.isActive,
                initialValue: state.select02.initialValue,
            }
        }

        setState(newState);
    }

    const changeValue = (value: string, idButton: number) => {

        const newState = {
            select01: {
                ...state.select01,
                isActive: idButton === 0 ? !state.select01.isActive : state.select01.isActive,
                initialValue: idButton === 0 ? value : state.select01.initialValue,
            },
            select02: {
                ...state.select02,
                isActive: idButton === 1 ? !state.select02.isActive : state.select02.isActive,
                initialValue: idButton === 1 ? value : state.select02.initialValue,
            }
        }

        setState(newState);

    }

    const showSelect = (select : SelectType) => {
        return <>
            <div className={classes.containerBlock}>
                <button
                    className={select.isActive ? classes.activeSelectBlock : classes.selectBlock}
                    style={{width: select.width}}
                    onClick={() => changeState(select.id)}>
                    <p className={classes.selectInfo}>{select.initialValue}</p>

                    {select.isActive ? <Select className={classes.activeSelect}/> :
                        <Select className={classes.select}/>}
                    {select.isActive ? <span className={classes.rectangle}></span> : null}
                </button>
                {select.isActive ?
                    <div className={classes.additionalInformation} style={{width: select.width}}>
                        {select.links.map(item => {
                            return <p
                                onClick={() => changeValue(item.value, select.id)}>{item.value}</p>
                        })}
                    </div>
                    : null}
            </div>
        </>
    }

    const sendForm = async  () => {
        switch (state.select01.initialValue) {
            case "выберите курс":
                return null;
                break;
            default :
                await getCardAllAction();
                await changeSelectCardAction(state.select01.initialValue, state.select02.initialValue);
                await changeFlagCardAction();
        }
    };

    const closeCard = async () => {
        await changeFlagCardAction();
    }

    return (
        <>
            <h2 className={classes.coursesTitle}>курсы <span>ProfSoft Academy</span></h2>
            <p className={classes.trainingInfo}>Пройди обучение и получи сертификат<br/> подтверждающий квалификацию</p>
            <div className={classes.selectBar}>
                {
                    showSelect(state.select01)
                }
                {
                    showSelect(state.select02)
                }
                {stateData.isShow ? <button className={classes.arrow} onClick={closeCard}><Close /></button> :
                    <button className={classes.arrow} onClick={sendForm}><Arrow/></button>}
            </div>
        </>
    )
}
;