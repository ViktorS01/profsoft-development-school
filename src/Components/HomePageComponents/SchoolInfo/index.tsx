import classes from "./schoolInfo.module.scss";
import React from "react";
import {ReactComponent as Cross} from './../../../assets/cross.svg';
import { Link, animateScroll as scroll } from "react-scroll";

export const SchoolInfo = () => {
    return (
        <>
            <div className={classes.content}>
                <Cross className={classes.content__cross}/>
                <h1 className={classes.content__title}>твой билет <br/> в команду мечты</h1>
                <p className={classes.content__info}>Пройди обучение и получи сертификат <br/>
                    подтверждающий квалификацию</p>
                <Link to="checkCertificate" offset={-88} smooth={true} duration= {800}>
                <button className={classes.content__buttonCheck} >проверить сертификат</button>
                </Link>
                <hr className={classes.hr}/>
                <div className={classes.content__whyBlock}>
                    <h2>Зачем?</h2>
                    <p>Компания ProfSoft находится на рынке мобильных приложений более 5-ти лет.
                        Мы не только разрабатываем качественные программные продукты,
                        но и подготавливаем квалифицированных IT-специалистов</p>
                </div>
                <div className={classes.content__blockSchoolInfo}>
                    <div className={classes.content__blockSchoolInfo__info}>
                        <h2>3</h2>
                        <p>Школы разработки</p>
                    </div>
                    <div className={classes.content__blockSchoolInfo__info}>
                        <h2>8</h2>
                        <p>направлений обучения</p>
                    </div>
                    <div className={classes.content__blockSchoolInfo__info}>
                        <h2>435</h2>
                        <p>записей</p>
                    </div>
                    <div className={classes.content__blockSchoolInfo__info__last}>
                        <h2>75</h2>
                        <p>учеников</p>
                    </div>
                </div>
            </div>
        </>
    )
}