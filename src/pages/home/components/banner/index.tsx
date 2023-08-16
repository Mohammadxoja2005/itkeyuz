import { FC } from 'react'
import styles from "./index.module.scss";
import IKCRMLOGO from "../../../../assets/icons/ikcrmlogo.png"

const Banner: FC = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>

                <div className={styles.banner_title_con}>
                    <h2 className={styles.banner_title}>Лучшее решение для застройщиков</h2>
                    <img className={styles.banner_logo} src={IKCRMLOGO} alt="ikcrm logo" />
                </div>

                <div className={styles.banner_info}>
                    <p className={styles.banner_info_des}>Софт собственного производства - <span className={styles.banner_info_bold}>IK CRM</span>, который предлагает решения для
                        эффективных <span className={styles.banner_info_bold}>продаж</span> в
                        сфере <span className={styles.banner_info_bold}> недвижимости.</span></p>
                </div>

                <a target='_blank' className={styles.banner_btn} href='https://ikcrm.uz/'>
                    Перейти
                </a>
            </div>
        </section>
    )
}

export default Banner