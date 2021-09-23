import React from "react";
import {UserCards} from "../../../Components/OldProjectComponents";
import {Wrapper} from "../../../Components/OldProjectComponents/Wrapper";

export const UserCardsPage = () => {
    return (
        <>
            <Wrapper Child={UserCards} title={'Карточки пользователей'} />
        </>
    )
}