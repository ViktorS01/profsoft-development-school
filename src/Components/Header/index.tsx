import React, {useState} from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { ReactComponent as LogoMobile } from "./../../assets/logoMobile.svg";
import { ReactComponent as CloseMobile } from "./../../assets/closeMobile.svg";
import {ReactComponent as Menu} from "../../assets/menu.svg";
import {useDispatch, useSelector} from "react-redux";
import {RootStateAuth} from "../../redux/type";
import {logout} from "../../redux/actions-create/authAction";
import {ActionState, ActionTypes} from "../../types/auth";
import ReactDOM from "react-dom";

export const Header = () => {
    const history = useHistory();
    const state = useSelector<RootStateAuth, ActionState>(state => state.auth);
    const dispatch = useDispatch();

    const [openPortal, setOpenPortal] = useState(false);

    const sendForm = () => {
        setLogout();
        history.push('/login');
    }

    const setLogout = async () => {
        await dispatch(logout());
    }

    const changePass = (token : string) => {
        if (token && history.location.pathname === '/personalArea'){
            return <NavLink to={"/login"} onClick={sendForm} className={classes.header__link__entry}>Выйти</NavLink>
        } if (token && history.location.pathname !== '/personalArea') {
            return <NavLink to={"/personalArea"} className={classes.header__link__entry}>Личный кабинет</NavLink>
        } else {
            return <NavLink to={"/login"} className={classes.header__link__entry}>Войти</NavLink>
        }
    }

    const openModal = () => {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        setOpenPortal(true);
    }

    const closeModal = () => {
        document.body.style.position = '';
        document.body.style.top = '';
        setOpenPortal(false);
    }

    const PortalModal = () => {
        const goToCourse = () => {
            closeModal();
            history.push('/courses');
        }

        const goToLogin = () => {
            closeModal();
            history.push('/login');
        }
        return ReactDOM.createPortal(<div className={classes.containerMobile}>
            <div className={classes.menuBarFix}>
                <section className={classes.menuBar}>
                    <div className={classes.mobileHeader}>
                        <button><LogoMobile /></button>
                        <button onClick={closeModal}><CloseMobile /></button>
                    </div>
                    <div className={classes.mobileBody}>
                        <h2>menu</h2>
                        <div className={classes.firstLinksMobileBlock}>
                            <a href='https://academy.profsoft.pro/'>академия</a>
                            <p onClick={() => goToCourse()}>курсы</p>
                            <p onClick={() => goToLogin()}>войти</p>
                        </div>
                        <div className={classes.secondLinksMobileBlock}>
                            <a href='https://www.profsoft.pro/'>profsoft.pro</a>
                            <a href='https://academy.profsoft.pro/'>academy.profsoft.pro</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>, document.body);
    }

    return (
        <div className={classes.main}>
        <header className={classes.header}>
            <NavLink to={"/"}><Logo className={classes.header__logo}/></NavLink>
            <div className={classes.header__linkBar}>
                <a
                    href={"https://www.profsoft.pro/"}
                    className={classes.header__link}
                >
                    Компания
                </a>
                <a
                    href={"https://academy.profsoft.pro/"}
                    className={classes.header__link}
                >
                    Академия
                </a>
                <NavLink
                    to={"/courses"}
                    exact={true}
                    className={classes.header__link}
                    activeClassName={classes.header__link__active}
                >
                    Курсы
                </NavLink>
                {
                    changePass(state.token)
                }
            </div>
            <button onClick={openModal} className={classes.header__menu}><Menu /></button>
        </header>
            {openPortal ? <PortalModal /> : null}
        </div>
    );
};
