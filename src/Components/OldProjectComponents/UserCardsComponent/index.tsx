import React, {useEffect, useState} from "react";
import {User} from "../../../types/OldProjectTypes/user";
import {api} from "../../../service/api.service";
import {PersonalCard} from "./CardComponent";
import {Container, Paper} from "@material-ui/core";
import classes from "./userCard.module.scss";

export const UserCards = () => {
    const [users, setUsers] = useState<[] | User[]>([]);

    const getUsers = async () => {
        const response = await api['users'].getList();
        setUsers(response);
        console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const blockUser = async (id: number) => {
        const response = await api['users'].delete(id);
        getUsers();
        return response;
    };

    return (
        <>
            <Container maxWidth={"md"}>
                    <div className={classes.container}>
                        {users.map(elem => {
                            return <PersonalCard id={elem.id}
                                                 status={elem.status}
                                                 name={elem.name}
                                                 email={elem.email}
                                                 role={elem.role}
                                                 blockUser={blockUser}
                            />
                        })}
                    </div>
            </Container>
        </>
    )
}