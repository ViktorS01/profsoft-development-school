import React from "react";
import {Switch, Route} from "react-router-dom";
// import {routes} from "../service/routes"
import {HomePage} from "../Pages/HomePage";
import {Login} from "../Pages/Login";
import {PersonalArea} from "../Pages/PersonalArea";
import {CoursesPage} from "../Pages/CoursesPage";
import {StyledComponent} from '../Pages/StyledComponent';

export function Router() {
    return (
        <Switch>
            <Route path={"/"} component={HomePage} exact={true} />
            <Route path={"/academy"} component={HomePage} exact={true} />
            <Route path={"/courses"} component={CoursesPage} exact={true} />
            <Route path={"/login"} component={Login} exact={true} />
            <Route path={"/personalArea"} component={PersonalArea} exact={true} />
            <Route path={"/sas"} component={StyledComponent} exact={true} />
        </Switch>
    );
}
