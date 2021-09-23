import React from "react";
import {TreeComponent} from "../../../Components/OldProjectComponents";
import {Container} from "../../../Components/Container";
import {Wrapper} from "../../../Components/Wrapper"

export const TreePage = () => {
    return (
        <>
            <Wrapper theme={"dark"}>
            <Container>
                <TreeComponent />
            </Container>
            </Wrapper>
        </>
    )
}