import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useHistory, useLocation} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import TocIcon from '@material-ui/icons/Toc';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import {routes} from "../../../service/routes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        }
    }),
);

const findNameByPath = (path: string) => {
    const pathName = path.split('/')[1];
    const route = routes.find(r => {
        return r.path === pathName;
    });

    return route ? route.title : "";
}

export const BarComponent = () => {

    const [title, setTitle] = useState("");

    const location = useLocation();

    useEffect(() => {
        setTitle(findNameByPath(location.pathname))
    }, [location])


    let history = useHistory()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const classes = useStyles();

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                {routes.map(route => {
                    if (route.path !== "login") {
                        const Icon = route.icon;

                        return <ListItem button onClick={() => {
                            history.push(`/${route.path}`)
                        }} key={route.id}>
                            <ListItemIcon>
                                <Icon/>
                            </ListItemIcon>
                            <ListItemText primary={`${route.title}`}/>
                        </ListItem>
                    } else {
                        return null;
                    }
                })
                }
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    onClick={handleOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        <Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <Drawer anchor={'left'} open={open} onClose={handleOpen}>
                    {list()}
                </Drawer>
            </div>
        </React.Fragment>
    );
}