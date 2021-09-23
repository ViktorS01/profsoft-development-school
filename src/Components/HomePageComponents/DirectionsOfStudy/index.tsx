import React from "react";
import classes from "./directionOfStudy.module.scss";
import {ReactComponent as Arrow} from "../../../assets/arrow.svg";
import {ReactComponent as Cross} from "../../../assets/cross.svg";
import {useHistory} from "react-router-dom";

export const DirectionsOfStudy = () => {
    const history = useHistory();

    return (
        <>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Cross className={classes.cross}/>
                    <h2>все Направления обучения</h2>
                    <button className={classes.arrow} onClick={() => history.push("/courses")}><Arrow /></button>
                </div>
                <p className={classes.info}>Компания ProfSoft находится на рынке мобильных приложений более 5-ти лет.
                    Мы не только разрабатываем качественные программные продукты,
                    но и подготавливаем квалифицированных IT-специалистов</p>
                <section className={classes.section}>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                    <div className={classes.figure}></div>
                </section>
            </div>
        </>
    )
}