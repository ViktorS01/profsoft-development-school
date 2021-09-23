import React, {FC, ReactElement} from "react";
import classes from './wrapper.module.scss';

interface Props {
    children: ReactElement | string;
    theme: "dark" | "light" | "darkFooter";
}

export const Wrapper: FC<Props> = ({children, theme} : Props) => {

    const changeClass = (theme : string) => {
        switch (theme){
            case "dark":
                return classes.darkTheme;
                break;
            case "light":
                return classes.lightTheme;
                break;
            case "darkFooter":
                return classes.darkFooter;
                break;
        }
    }

    return (
        <>
            <section className={changeClass(theme)}>
                {children}
            </section>
        </>
    )
}