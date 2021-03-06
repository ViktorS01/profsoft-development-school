import React from "react";
import {Wrapper} from "../../Wrapper";
import {Container} from "../../Container";
import {SchoolInfo} from "../SchoolInfo";
import {CertificateBlock} from "../–°ertificateBlock";
import {OpenBlock} from "../–°ertificateBlock/OpenBlock";
import {DirectionsOfStudy} from "../DirectionsOfStudy";

export const HomePageComponent = () => {
    return <>
        <Wrapper theme={"dark"}>
            <Container>
                <SchoolInfo/>
            </Container>
        </Wrapper>
        <Wrapper theme={"light"}>
            <Container>
                <OpenBlock />
            </Container>
        </Wrapper>
        <Wrapper theme={"dark"}>
            <Container>
                <DirectionsOfStudy/>
            </Container>
        </Wrapper>
    </>
}