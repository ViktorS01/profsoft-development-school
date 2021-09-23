import React, { FC, ReactElement } from "react";

import { Header } from "../../Components/Header";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { Footer } from "../../Components/Footer";

import classes from "./main.module.scss";

interface Props {
    children: ReactElement | string;
}
export const Main: FC<Props> = ({ children }: Props) => {
    return (
        <div className={classes.main}>
            <Wrapper theme={"dark"}>
                <Container>
                    <Header />
                </Container>
            </Wrapper>
            {children}
            <Wrapper theme={"darkFooter"}>
                <Container>
                    <Footer />
                </Container>
            </Wrapper>
        </div>
    );
};
