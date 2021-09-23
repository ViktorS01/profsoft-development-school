import React from "react";
import Button from "@material-ui/core/Button";
import {Container, Grid, Paper, TextField, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import styles from "./login.module.scss";
import {useFormik} from "formik";
import * as yup from "yup";

const useStylesForm = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
        input: {
            width: "420px",
            marginTop: "10px",
            marginBottom: "10px",
        },
    })
);

export const LoginComponent = () => {
    const classesForm = useStylesForm();

    const {values, errors, handleChange, handleSubmit, touched} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required("Поле должно быть заполнено")
                .email("Не является email"),
            password: yup.string()
                .required("Поле должно быть заполнено")
                .min(5, "Пароль минимум от 5 символов"),
        }),
        onSubmit: () => {
            console.log(values);
        }
    });

    return (
        <Container maxWidth="sm" >
            <Paper elevation={3} className={styles.paper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        label="Логин"
                        variant="filled"
                        className={classesForm.input}
                        type={"text"}
                        value={values.email}
                        name={"email"}
                        onChange={handleChange}
                        error={!!(errors.email && touched.email)}
                        helperText={
                            errors.email && touched.email
                                ? errors.email
                                : "Здесь будет выводиться ошибка"
                        }
                    />
                    <TextField
                        label="Пароль"
                        variant="filled"
                        className={classesForm.input}
                        type={"password"}
                        name={"password"}
                        value={values.password}
                        onChange={handleChange}
                        error={!!(errors.password && touched.password)}
                        helperText={
                            errors.password && touched.password
                                ? errors.password
                                : "Здесь будет выводиться ошибка"
                        }
                    />

                    <Button variant="contained" color="secondary" type="submit">
                        Войти
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};
