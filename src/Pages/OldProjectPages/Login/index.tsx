import React from "react";
import {LoginComponent} from "../../../Components/OldProjectComponents";
import {Wrapper} from "../../../Components/OldProjectComponents/Wrapper";

export const LoginPage = () => {
    return (
        <>
            <Wrapper Child={LoginComponent} title={'Регистрация'} />
        </>
    )
}