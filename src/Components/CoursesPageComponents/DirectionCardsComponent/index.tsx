import React from "react";
import classes from './directionCardsComponent.module.scss';
import {DirectionCardComponent} from "./DirectionCard";
import Image01 from "../../../assets/designCardImg2.jpg";
import Image02 from "../../../assets/designCardImg1.jpg";
import Image04 from "../../../assets/designCardImage03.jpg";
import Image03 from "../../../assets/designCardImage04.jpg";
import {useSelector} from "react-redux";
import {RootStateCard} from "../../../redux/type";
import {CardState} from "../../../types/card";

export const DirectionCardsComponent = () => {
    const state = useSelector<RootStateCard, CardState>(state => state.card);

    return <>
        {state.isShow && state.selectBar.value01 === 'все' ? state.data.map(item => {
            return <DirectionCardComponent image01={Image01}
                                           image02={Image02}
                                           direction={item.direction}
                                           study={item.study}
                                           trainingForm={item.trainingForm}
                                           trainingPeriod={item.trainingPeriod}
                                           teacher={item.teacher}/>
        }) : null}
        {state.isShow && state.selectBar.value01 === 'Design' ? state.data.map(item => item.direction === 'Design' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'Android' ? state.data.map(item => item.direction === 'Android' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'PM' ? state.data.map(item => item.direction === 'PM' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'IOS' ? state.data.map(item => item.direction === 'IOS' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'Frontend' ? state.data.map(item => item.direction === 'Frontend' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'Backend' ? state.data.map(item => item.direction === 'Backend' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
        {state.isShow && state.selectBar.value01 === 'QA' ? state.data.map(item => item.direction === 'QA' ?
            <DirectionCardComponent image01={Image01}
                                    image02={Image02}
                                    direction={item.direction}
                                    study={item.study}
                                    trainingForm={item.trainingForm}
                                    trainingPeriod={item.trainingPeriod}
                                    teacher={item.teacher}/> : null) : null
        }
    </>
}