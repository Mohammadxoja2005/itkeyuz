import React, { useEffect } from 'react'
import styles from "./index.module.scss";

import LOGO from "../../assets/img/logo.png";

import TELEGRAM from '../../assets/icons/telegram.png'
import INSTAGRAM from '../../assets/icons/instagram.png'
import FACEBOOK from '../../assets/icons/facebook.png'
import ARROW from "../../assets/icons/arrow.png"
// video
import BACKGROUNDVIDEO from './backgroundVideo';


const HEADER = () => {

    useEffect(() => {
        const header: any = document.querySelector('[data-header="header"]');

        header.style.minHeight = `${window.innerHeight}px`;

        // window.addEventListener("resize", () => {
        //     header.style.height = `${window.innerHeight}px`;
        // })
    }, [])


    return (
        <>
            <header data-header="header" className={styles.header}>
                {/* <BACKGROUNDVIDEO /> */}
                <div className={styles.header_container}>

                    <div className={styles.header_navbar}>
                        <a href='/' className={styles.header_logo_con}>
                            <img src={LOGO} alt="logo" className={styles.header_logo} />
                        </a>

                        <div className={styles.header_burger}>
                            <div className={styles.header_burger_before} ></div>
                            <div className={styles.header_burger_main} ></div>
                            <div className={styles.header_burger_after} ></div>
                        </div>
                    </div>

                    <div className={styles.header_content} >
                        <div className={styles.header_content_social_con}>

                            <div className={styles.header_social}>
                                <img src={TELEGRAM} alt="telegram" />
                            </div>
                            <div className={styles.header_social}>
                                <img src={INSTAGRAM} alt="instagram" />
                            </div>
                            <div className={styles.header_social}>
                                <img src={FACEBOOK} alt="facebook" />
                            </div>
                            <div className={styles.header_social}>
                                <p className={styles.header_social_scroll}>scroll</p>
                                <img src={ARROW} alt="arrowdown" />
                            </div>

                        </div>

                        <div className={styles.header_content_info}>
                            <h1 className={styles.header_content_title} >IT•KEY</h1>
                            <h2 className={styles.header_content_des}>Бесконечное множество,бизнес решений!</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default HEADER;
