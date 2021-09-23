import React, {useContext, useState} from "react";
import classes from "./certificateBlock.module.scss";
import {ReactComponent as Arrow} from "../../../assets/arrow.svg";
import {ReactComponent as Repeat} from "../../../assets/repeat.svg";
import NumberFormat from 'react-number-format';

export const CertificateBlock = () => {
    const [value, setValue] = useState('');

    function handleChange(event: any) {
        setValue(event.target.value);
        event.target.parentNode.children[1].style.display = "none";
        event.target.parentNode.children[2].style.display = "block";
    }

    return (
        <>
            <div className={classes.content}>
                <h2>проверить сертификат</h2>
                <p>Введите номер сертификата для проверки подлинности</p>
                <div className={classes.inputBar}>
                    <NumberFormat className={classes.format}
                                  format="##-#####-#######"
                                  placeholder="08-09270-7321897"
                                  value={value}
                                  onChange={handleChange}/>
                    <Arrow className={classes.arrow}/>
                    <Repeat className={classes.repeat} onClick={() => setValue("")} />
                </div>
            </div>
        </>
    )
}