import React from "react";
import classes from './personalAreaComponent.module.scss';
import {Wrapper} from "../Wrapper";
import {Container} from "../Container";
import {PersonalInfo} from "./PersonalInfo";
import {OpenBlock} from "../HomePageComponents/СertificateBlock/OpenBlock";
import {MyCourse} from "./MyCourse";

export const PersonalAreaComponent = () => {
    return (
        <>
            <Wrapper theme={"dark"}>
                <Container>
                    <PersonalInfo />
                </Container>
            </Wrapper>
            <Wrapper theme={"light"}>
                <Container>
                    <MyCourse />
                </Container>
            </Wrapper>
            <Wrapper theme={"light"}>
                <Container>
                    <OpenBlock personalArea={true}/>
                </Container>
            </Wrapper>
        </>
    )
}