import React from "react";
import {CounterComponent} from "../../../Components/OldProjectComponents";
import {Wrapper} from "../../../Components/OldProjectComponents/Wrapper";

export const CounterPage = () => {
    return (
        <>
            <Wrapper Child={CounterComponent} title={'Счетчик'} />
        </>
    )
}