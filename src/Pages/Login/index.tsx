import React from "react";
import {Main} from "../../Layouts/Main";
import {LoginComponent} from "../../Components/LoginComponents";
import {Container} from "../../Components/Container";
import {Wrapper} from "../../Components/Wrapper";

export const Login = () => {
    return <>
        <Main>
            <Wrapper theme={"dark"}>
                <Container>
                    <LoginComponent />
                </Container>
            </Wrapper>
        </Main>
    </>
}