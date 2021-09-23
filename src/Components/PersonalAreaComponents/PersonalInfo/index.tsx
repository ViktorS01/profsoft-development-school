import classes from "./personalInfo.module.scss";
import {ReactComponent as HiMan} from "../../../assets/hi-man.svg";
import React from "react";
import {useSelector} from "react-redux";
import {RootStateAuth} from "../../../redux/type";
import {ActionState} from "../../../types/auth";

export const PersonalInfo = () => {
    const state = useSelector<RootStateAuth, ActionState>(state => state.auth);

    return (
        <>
        <div className={classes.personalArea}>
            <div className={classes.person}>
                <HiMan className={classes.hiMan}/>
            </div>
            <div className={classes.info}>
                <h2>{state.name}</h2>
                <p>{state.login}</p>
            </div>
        </div>
        </>
    )
}