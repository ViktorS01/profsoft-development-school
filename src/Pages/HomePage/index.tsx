import React from "react";
import {Main} from "../../Layouts/Main";
import "./homePage.module.scss";
import {HomePageComponent} from "../../Components/HomePageComponents";

export const HomePage = () => {
    return (
        <>
            <Main>
                <HomePageComponent/>
            </Main>
        </>
    )
}