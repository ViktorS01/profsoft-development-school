import {Breadcrumbs, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import classes from './bread.module.scss';
import {useHistory} from "react-router-dom";

export const BreadCrumbs = (props: any) => {
    let history = useHistory();

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        history.push("/");
    }

    return (
        <>
            <div className={classes.BreadCrumbs}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Главная страница
                    </Link>
                    <Typography color="textPrimary">{props.nameLink}</Typography>
                </Breadcrumbs>
            </div>
        </>
    )
}



