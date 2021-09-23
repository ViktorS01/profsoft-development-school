import {Container, Paper} from "@material-ui/core";
import React, {useState} from "react";
import classes from "./counter.module.scss";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    }),
);

export const CounterComponent = () => {
    const classesButton = useStyles();

    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter((prev) => prev + 1);
    };
    return (
        <Container maxWidth="sm">
            <Paper elevation={3} className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.container__counter}>{counter}</div>
                    <div className={classesButton.root}>
                    <Button variant="contained"
                            color="primary"
                            onClick={handleClick}>
                        Увеличить счетчик
                    </Button>
                    <Button variant="contained"
                            color="primary"
                            onClick={() => setCounter(0)}>
                        Сбросить
                    </Button>
                    </div>
                </div>
            </Paper>
        </Container>
    );
};
