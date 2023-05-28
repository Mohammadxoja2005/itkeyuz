import React, { FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import PHONE from "../../assets/icons/phone.png";
import PHONECALL from "../../assets/icons/phonecall.png";
import LOCATION from "../../assets/icons/location.png";
import LOGOMINI from "../../assets/img/logo.png"
import DOWN from "../../assets/icons/down.png"
// images
import TELEGRAM from '../../assets/icons/minitelegram.png'
import INSTAGRAM from '../../assets/icons/miniinstagram.png'
import FACEBOOK from '../../assets/icons/minifacebook.png'
// data  
import { footerData } from '../../data/data';
// axios 
import axios from "axios";

const FOOTER: FC = () => {
    const [isClicked, setIsClicked] = useState<number | null>(null);

    return (
        <section className={styles.footer}>
            <div className={styles.footer_con}>

                <div className={styles.footer_contact}>
                    <div className={styles.footer_contact_detail}>
                        <div className={styles.footer_contact_detail_icon}>
                            <img src={PHONE} alt="itkey phone" />
                            <h3 className={styles.footer_contact_icon_name}>Отдел продаж</h3>
                        </div>
                        <h3 className={styles.footer_contact_phone}>
                            +998(97)777-34-19
                        </h3>
                    </div>
                    <div className={styles.footer_contact_detail}>
                        <div className={styles.footer_contact_detail_icon}>
                            <img src={PHONECALL} alt="itkey phone" />
                            <h3 className={styles.footer_contact_icon_name}>Помощь специалиста</h3>
                        </div>
                        <h3 className={styles.footer_contact_phone}>
                            +998(99)335-75-78
                        </h3>
                    </div>
                    <div className={styles.footer_contact_detail}>
                        <div className={styles.footer_contact_detail_icon}>
                            <img src={LOCATION} alt="itkey location" />
                            <h3 className={styles.footer_contact_icon_name}>Ташкент</h3>
                        </div>
                        <h3 className={styles.footer_contact_phone}>
                            Юнусабадский район, Ц-4, дом 12
                        </h3>
                    </div>
                </div>

                <div className={styles.footer_add}>
                    {footerData.map((service) => {
                        const isHovered = isClicked === service.id;

                        return (
                            <div key={service.id} className={styles.footer_add_info}>
                                <div className={styles.footer_add_title_con} onClick={() => setIsClicked((prev) =>
                                    prev === service.id
                                        ?
                                        prev = null
                                        : prev = service.id)}>
                                    <h2 className={styles.footer_info_title}>{service.name}</h2>
                                    {isHovered
                                        ?
                                        <img src={DOWN} alt="" style={{ rotate: "180deg" }} />
                                        : <img src={DOWN} alt="" />}
                                </div>

                                {window.innerWidth > 881 ?
                                    <div className={styles.footer_info_con}>
                                        {
                                            service.list.map((list) => {
                                                return (
                                                    <div className={styles.footer_info_name_con}>
                                                        <div className={styles.footer_info_bullet}></div>
                                                        <h4 className={styles.footer_info_name}>{list.name}</h4>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                    :
                                    <>
                                        {
                                            isHovered
                                                ?
                                                <div className={styles.footer_info_con}>
                                                    {
                                                        service.list.map((list) => {
                                                            return (
                                                                <div className={styles.footer_info_name_con}>
                                                                    <div className={styles.footer_info_bullet}></div>
                                                                    <h4 className={styles.footer_info_name}>{list.name}</h4>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                : null}
                                    </>

                                }

                            </div>
                        )
                    })}
                </div>

                <div className={styles.footer_social}>
                    <div className={styles.footer_social_rights}>
                        <img src={LOGOMINI} alt="itkey logo" />
                    </div>
                    <div className={styles.footer_social_name_con} >
                        <p className={styles.footer_social_name_off}>2023 - IT KEY</p>
                        <p className={styles.footer_social_name}>Сайт защищен reCAPTCHA и Google.</p>
                        <p className={styles.footer_social_name}>
                            <a className={styles.footer_social_name} href="#">Конфиденциальность</a>
                            <span style={{ marginLeft: "4px", marginRight: "4px" }} >и</span>
                            <a className={styles.footer_social_name} href="#">Условия.</a>
                        </p>
                    </div>

                    <div className={styles.footer_social_media}>
                        <div className={styles.footer_media}>
                            <a href="#"><img className={styles.footer_media_img} src={TELEGRAM} alt="telegram" /></a>
                            <a href="#"><img className={styles.footer_media_img} src={INSTAGRAM} alt="instagram" /></a>
                            <a href="#"><img className={styles.footer_media_img} src={FACEBOOK} alt="facebook" /></a>
                        </div>
                        <a className={styles.footer_social_document} href="#">Публичная оферта</a>
                        <a className={styles.footer_social_document} href="#">Политика конфиденциальности</a>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default FOOTER;