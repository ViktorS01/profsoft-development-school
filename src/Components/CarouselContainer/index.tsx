import React from "react";
import Image01 from "../../assets/designCardImg2.jpg";
import Image02 from "../../assets/designCardImg1.jpg";
import classes from "./carouselContainer.module.scss";

export const CarouselContainer = () => {
    return (
        <div className={classes.imageWrapper}>
            <div className={classes.slider}>
                <img src={Image01} className={classes.image} alt="1"/>
                <img src={Image02} className={classes.image} alt="2"/>
            </div>
        </div>
    )
}