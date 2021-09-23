import React from "react";
import {Container} from "../Container";
import {Wrapper} from "../Wrapper";
import {SelectCoursesComponent} from "./SelectCoursesComponent";
import {DirectionCardsComponent} from "./DirectionCardsComponent";
import "./coursesComponent.module.scss";

export const CoursesComponent = () => {
    return (
        <>
            <Wrapper theme={"dark"}>
                <Container>
                    <SelectCoursesComponent/>
                </Container>
            </Wrapper>
            <Wrapper theme={"light"}>
                <Container>
                    <DirectionCardsComponent />
                </Container>
            </Wrapper>
        </>
    )
}