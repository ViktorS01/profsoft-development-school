import React, {useEffect} from "react";
import {Router} from "./router";
import "./app.css";
import {useDispatch} from 'react-redux';
import {ActionState} from "./types/auth";
import {login} from "./redux/actions-create/authAction";

export function App(){
    const dispatch = useDispatch();
    useEffect(() => {
        const jsonUserData = localStorage.getItem('userData');
        if (jsonUserData){
            const userData : ActionState = JSON.parse(jsonUserData);
            login();
        }
    }, [])
    return <Router />;
}