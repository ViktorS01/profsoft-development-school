import React from "react";
import {User} from "../../../../types/OldProjectTypes/user";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from "../../TableComponent/table.module.scss";
import {Props} from "../../../../types/OldProjectTypes/props";

const useStyles = makeStyles({
    root: {
        marginBottom: 15,
        maxWidth: 200
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    buttonUser: {
        width: 150
    }
});


export const PersonalCard = ({role, id, blockUser, name, status, email}: Props) => {
    const classes = useStyles();
    const statusName = status === 1 ? "Активен" : "Заблокирован";
    const buttonName = status === 1 ? "Блокировать" : "Разблокировать";
    const colorButton = status === 1 ? "secondary" : "primary";

    return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Карточка сотрудника (id:{id})
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {role}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div
                        onClick={() => {
                            blockUser(id);
                        }}
                    >
                        <Button variant="contained"
                                color={colorButton}
                                className={classes.buttonUser}>
                            {buttonName}
                        </Button>
                    </div>
                </CardActions>
            </Card>
    )
}