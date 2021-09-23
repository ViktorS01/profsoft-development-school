import React from "react";
import {TableComponent} from "../../../Components/OldProjectComponents";
import {Wrapper} from "../../../Components/OldProjectComponents/Wrapper";

export const TablePage = () => {
    return (
        <>
            <Wrapper Child={TableComponent} title={'Таблица'} />
        </>
    )
}