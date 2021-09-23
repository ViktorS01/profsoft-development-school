import React from "react";
import classes from './loginComponent.module.scss';
import {ReactComponent as Arrow} from "./../../assets/arrow.svg";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";
import * as yup from "yup";
import {login} from "../../redux/actions-create/authAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";

export const LoginComponent = () => {
    const state = useTypedSelector((state) => state.auth);
    const { login, getCertificateAction } = useActions();
    const history = useHistory();

    const sendForm = async () => {
        await getCertificateAction();
        await login();
        await history.push("/personalArea");
    }

    const BasicExample = () => (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={yup.object().shape({
                    email: yup.string()
                    .required("Поле должно быть заполнено")
                    .email("Не является email"),
                    password: yup.string()
                    .required("Поле должно быть заполнено")
                    .min(5, "Пароль минимум от 5 символов"),
                })}
                onSubmit={() => {
                    sendForm();
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} className={classes.inputBar}>
                        <section className={classes.section}>
                            <input
                                className={classes.input}
                                type="text"
                                placeholder={"Email"}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                name="email"
                            />
                            {props.errors.email && <div id="feedback" className={classes.feed01}>{props.errors.email}</div>}
                        </section>

                        <div className={classes.section02}>
                            <section className={classes.section}>
                                <input
                                    className={classes.input}
                                    type="text"
                                    placeholder={"Пароль"}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.password}
                                    name="password"
                                />
                                {props.errors.password && <div id="feedback" className={classes.feed02}>{props.errors.password}</div>}
                            </section>
                            <button type="submit" className={classes.arrow}><Arrow  /></button>
                        </div>
                        <button type="submit" className={classes.arrow} disabled={state.in_progress}><Arrow  /></button>
                    </form>
                )}
            </Formik>
        </div>
    );

    return <>
        <h2 className={classes.title}>личный кабинет</h2>
        < BasicExample />
        <p className={classes.info}>Что-то не получается? <br/>Напишите в поддержку <span>academy@profsoft.pro</span>
        </p>
        <hr className={classes.hr}/>
    </>
}