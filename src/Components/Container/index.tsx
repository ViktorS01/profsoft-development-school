import React, {FC, ReactElement} from "react";
import classes from './container.module.scss';

interface Props {
    children: ReactElement | string;
}

export const Container: FC<Props> = ({children} : Props) => {
    return (
        <>
            <div className={classes.container}>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}