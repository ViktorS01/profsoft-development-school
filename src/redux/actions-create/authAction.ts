import {Dispatch} from "react";
import {ActionTypes, AuthType} from "../../types/auth";
import {useAuth} from "../../hooks/useAuth";

export const login = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: AuthType.IN_PROGRESS, payload: true });
        try {
            const { login } = useAuth();
            const obj = await login();
            localStorage.setItem("userData", JSON.stringify(obj));
            dispatch({ type: AuthType.LOGIN, payload: obj });
            dispatch({ type: AuthType.IN_PROGRESS, payload: false });
        } catch (e) {
            dispatch({ type: AuthType.IN_PROGRESS, payload: false });
        }
    };
};

export const logout = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: AuthType.LOGOUT, payload: true });
        localStorage.removeItem("userData");
    };
};