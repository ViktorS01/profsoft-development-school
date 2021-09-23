import React from "react";
import classes from "./footer.module.scss";
import { Text } from "../Text";

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerBlocks}>
            <Text type={"gold"} text={"profsoft.pro"} />
            <Text
                type={"gold"}
                text={"academy.profsoft.pro"}
                url={"https://academy.profsoft.pro"}
            />
            </div>
            <div className={classes.footerBlocks2}>
                <Text type={"white"} text={"vk.com"} />
                <Text
                    type={"white"}
                    text={"facebook.com"}
                    url={"https://facebook.com"}
                />
            </div>
            <div className={classes.footerBlocks3}>
                <Text type={"white"} text={"instagram.com"} />
                <Text
                    type={"white"}
                    text={"youtube.com"}
                    url={"https://youtube.com"}
                />
            </div>
            <div className={classes.footerBlocks4}>
                <Text type={"grey"} text={"2021 © LLC ProfSoft"} />
                <Text type={"grey"} text={"Публичная оферта"}/>
            </div>
        </footer>
    );
};
