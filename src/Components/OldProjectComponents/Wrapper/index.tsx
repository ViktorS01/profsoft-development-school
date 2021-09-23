import React from "react";
import {BarComponent} from "../BarComponent";
import {BreadCrumbs} from "../BreadCrumbs";

interface Props {
    Child: any;
    title: string;
}


export const Wrapper = ({Child, title}: Props) => {
    return (
        <>
            <BarComponent/>
            <BreadCrumbs nameLink={title} />
            <Child />
        </>
    )
}