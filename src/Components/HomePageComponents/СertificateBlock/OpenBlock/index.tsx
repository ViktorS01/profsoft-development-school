import React, {useState} from "react";
import classes from './openBlock.module.scss';
import {ReactComponent as Men} from "../../../../assets/yellowMen.svg";
import {ReactComponent as Logo} from "../../../../assets/logo.svg";
import {ReactComponent as Signature} from "../../../../assets/signature.svg";
import {
    changeFlagActionInHome,
    deleteCertificateAction,
    getCertificateAction
} from "../../../../redux/actions-create/certificateAction";
import NumberFormat from "react-number-format";
import {ReactComponent as Arrow} from "../../../../assets/arrow.svg";
import {ReactComponent as Repeat} from "../../../../assets/repeat.svg";
import {Formik} from "formik";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useAction";

export const OpenBlock = (props: any) => {
    const state = useTypedSelector((state) => state.certificate);
    const {getCertificateAction, changeFlagActionInHome} = useActions();

    const [buttonDis, setButtonDis] = useState(false);
    const [inputCompleted, setInputCompleted] = useState(false);
    const [value, setValue] = useState('');

    const showBlock = () => {
        return <>
            <div className={classes.openBlock}>
                <div className={classes.openBlock__info}>
                    <div className={classes.openBlock__info__certificateTitle}>
                        <p className={classes.greyLightText}>Сертификат</p>
                        <p className={classes.blackText}>№ {state.number}</p>
                        <div className={classes.openBlock__info__certificateTitle__name}>
                            <p className={classes.blackText}>{state.fullName}</p>
                        </div>
                    </div>
                    <div className={classes.openBlock__info__certificateInfo}>
                        <p className={classes.greyLightText}>Направление подготовки: </p>
                        <p className={classes.blackText}>{state.direction}</p>
                    </div>
                    <div className={classes.openBlock__info__certificatePeriod}>
                        <p className={classes.greyLightText}>Период обучения: </p>
                        <p className={classes.blackText}>{state.dateStart}
                            -{state.dateFinish} </p>
                    </div>
                    <div className={classes.openBlock__info__certificateLearn}>
                        <p className={classes.greyLightText}>Изучено: </p>
                        <p className={classes.blackText}>{state.features[0].name}; </p>
                        <p className={classes.blackText}>{state.features[1].name}; </p>
                        <p className={classes.blackText}>{state.features[2].name};
                            UX-analytics </p>
                    </div>
                </div>
                <div className={classes.openBlock__card}>
                    <div className={classes.openBlock__card__blackSquare}>
                        <Men className={classes.openBlock__card__blackSquare__men}/>
                        <div className={classes.openBlock__card__blackSquare__blockInfo}>
                            <Logo className={classes.openBlock__card__blackSquare__blockInfo__logo}/>
                            <p className={classes.openBlock__card__blackSquare__blockInfo__certificate}>
                                Сертификат <br/> о прохождении обучения
                            </p>
                            <p className={classes.openBlock__card__blackSquare__blockInfo__name}>
                                {state.fullName}
                            </p>
                            <hr style={{margin: "2px 0", border: "0.361751px solid #FFFFFF"}}/>
                            <p className={classes.openBlock__card__blackSquare__blockInfo__period}>
                                Направление подготовки {state.direction} <br/>
                                период обучения {state.dateStart}
                                -{state.dateFinish}
                            </p>
                            <button className={classes.openBlock__card__blackSquare__blockInfo__button}>Figma</button>
                            <button className={classes.openBlock__card__blackSquare__blockInfo__button}>UXPIN</button>
                            <p className={classes.openBlock__card__blackSquare__blockInfo__director}>
                                Директор ООО ProfSoft <br/> Каплин К.О.
                            </p>
                            <Signature className={classes.openBlock__card__blackSquare__blockInfo__signature}/>
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes.link}>
                поделиться
            </p>
        </>
    }

    const FormikInput = () => {
        async  function checkValueInput(event: any) {
            if(event.target.value.trim().length === 16) {
                setValue(event.target.value);
                await setInputCompleted(true);
                await setButtonDis(true);
                await getCertificateAction();

                await setButtonDis(false);
            }
        }
        const sendForm = async  () => {
            await changeFlagActionInHome();
        }
        const repeat = () => {
            setInputCompleted(false);
            setValue('');
            changeFlagActionInHome();
        }
        return <>
            <Formik
                initialValues={{certificate: ''}}
                onSubmit={(values) => {
                    sendForm();
                }}

            >
                {props => (
                    <form className={classes.inputBar} onSubmit={props.handleSubmit}>
                        <NumberFormat className={classes.format}
                                      format="##-#####-#######"
                                      placeholder="08-09270-7321897"
                                      type="text"
                                      onChange={(e) => {checkValueInput(e)}}
                                      value={value}
                                      name="certificate"/>
                        <button className={classes.arrow}  type="submit" disabled={buttonDis}>
                            {state.isShowInHome ? null : <Arrow className={!inputCompleted ? classes.inArrowGrey : classes.inArrowBlack}
                                                          style={{opacity: buttonDis ? 0.1 : 1}}
                            />}
                        </button>
                        {state.isShowInHome ? <Repeat className={classes.repeat} onClick={repeat}/> : null}
                    </form> )}
            </Formik>
        </>
    }

    const showInput = () => {
        return (
            <>
                <div className={classes.content}>
                    <h2 className='checkCertificate'>проверить сертификат</h2>
                    <p>Введите номер сертификата для проверки подлинности</p>
                    <FormikInput />
                </div>
            </>
        )
    }

    return (
        <>
            {!props.personalArea ? showInput() : ""}
            {!props.personalArea && state.isShowInHome ? showBlock() : ""}
            {props.personalArea && state.isShowInArea ? showBlock() : ""}
        </>
    )
}