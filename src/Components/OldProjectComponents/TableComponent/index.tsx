import React, {useEffect, useState} from "react";
import classes from "./table.module.scss";
import {Props} from "../../../types/OldProjectTypes/props";
import {User} from "../../../types/OldProjectTypes/user";
import {api} from "../../../service/api.service";
import Container from "@material-ui/core/Container";
import {Grid, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useFormik} from "formik";
import * as yup from "yup";

const GenerateRow = ({role, id, blockUser, name, status, email}: Props) => {

    const statusName = status === 1 ? "Активен" : "Заблокирован";
    const buttonName = status === 1 ? "Блокировать" : "Разблокировать";
    const colorButton = status === 1 ? "secondary" : "primary";

    return (
        <TableRow component="tr" className={classes.tr}>
            <TableCell component="td" className={classes.td}>{email}</TableCell>
            <TableCell component="td" className={classes.td}>{name}</TableCell>
            <TableCell component="td" className={classes.td}>{role}</TableCell>
            <TableCell component="td" className={classes.td}>{statusName}</TableCell>
            <TableCell component="td" className={classes.td}>
                <div
                    className={classes.blockButton}
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
            </TableCell>
        </TableRow>
    );
};

export const TableComponent = () => {
    const [users, setUsers] = useState<[] | User[]>([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const {values, errors, handleChange, handleSubmit, touched} = useFormik({
        initialValues: {
            email: "",
            name: "",
            role: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required("Поле должно быть заполнено")
                .email("Не является email")
                .min(6, "Минимальное количество символов - 6"),
            name: yup.string()
                .required("Поле должно быть заполнено")
                .max(10, "Превышено количество символов"),
            role: yup.string()
                .required("Поле должно быть заполнено")
                .max(10, "Превышено количество символов"),
        }),
        onSubmit: async (values, {resetForm}) => {
            await addPerson(values);
            await resetForm({});
        }
    });

    const addPerson = async (values : any) => {
        const data = {
            email: values.email,
            name: values.name,
            role: values.role,
        }

        const response = await api['users'].post(data);
        getUsers();
        return response;
    }

    const getUsers = async () => {
        const response = await api['users'].getList();
        setUsers(response);
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
            <Container maxWidth="md">
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead className={classes.thead}>
                            <TableRow>
                                <TableCell className={classes.th}>Email</TableCell>
                                <TableCell className={classes.th}>Фамилия и имя</TableCell>
                                <TableCell className={classes.th}>Роль</TableCell>
                                <TableCell className={classes.th}>Статус</TableCell>
                                <TableCell className={classes.th}>Действия</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <GenerateRow
                                    name={user.name}
                                    email={user.email}
                                    role={user.role}
                                    id={user.id}
                                    status={user.status}
                                    key={user.id}
                                    blockUser={blockUser}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <form action="" onSubmit={handleSubmit}>
                    <div className={classes.root}>
                        <Grid container spacing={0} className={classes.inputsBar}
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center">
                            <Grid item xs={3}>
                                <TextField id="email"
                                           type={"text"}
                                           value={values.email}
                                           name={"email"}
                                           placeholder="Email"
                                           onChange={handleChange}
                                           error={!!(errors.email && touched.email)}
                                           helperText={
                                               errors.email && touched.email
                                                   ? errors.email
                                                   : "Здесь будет выводиться ошибка"
                                           }/>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="name"
                                           type={"text"}
                                           value={values.name}
                                           name={"name"}
                                           placeholder="ФИО"
                                           onChange={handleChange}
                                           error={!!(errors.name && touched.name)}
                                           helperText={
                                               errors.name && touched.name
                                                   ? errors.name
                                                   : "Здесь будет выводиться ошибка"
                                           }/>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="role"
                                           type={"text"}
                                           value={values.role}
                                           name={"role"}
                                           placeholder="Роль"
                                           onChange={handleChange}
                                           error={!!(errors.role && touched.role)}
                                           helperText={
                                               errors.role && touched.role
                                                   ? errors.role
                                                   : "Здесь будет выводиться ошибка"
                                           }/>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        color="primary"
                                        type="submit">
                                    Отправить данные
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </Container>
        </>
    );
}