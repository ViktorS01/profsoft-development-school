import React from "react";
import classes from "./directionCard.module.scss";
import {CarouselContainer} from "../../../CarouselContainer";

export const DirectionCardComponent = (props : any) => {

    return <>
        <div className={classes.directionCards}>
            <div className={classes.directionCards__firstBlock}>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Направление подготовки:</h2>
                    <p className={classes.directionCardInfo}>{props.direction}</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Изучение: </h2>
                    <p className={classes.directionCardInfo}> {props.study}</p>
                </div>
            </div>
            <div className={classes.directionCards__secondBlock}>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Форма обучения: </h2>
                    <p className={classes.directionCardInfo}>{props.trainingForm}</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Период обучения:  </h2>
                    <p className={classes.directionCardInfo}> {props.trainingPeriod}</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Преподаватель:  </h2>
                    <p className={classes.directionCardInfo}> {props.teacher}</p>
                </div>
            </div>
            <div className={classes.directionCards__imagesBlock}>
                < CarouselContainer />
            </div>
        </div>
    </>
}