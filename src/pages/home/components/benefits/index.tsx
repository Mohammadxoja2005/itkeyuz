import React, { FC } from 'react'

// styles
import styles from "./index.module.scss";
// data
import { benefits } from '../../../../data/data';

const BENEFITS: FC = () => {
    return (
        <section className={styles.benefits}>
            <div className={styles.benefits_container}>
                <div className={styles.benefits_title_con}>
                    <h2 className={styles.benefits_title}>Наши плюсы</h2>
                    <div className={styles.benefits_title_line}></div>
                </div>

                <div className={styles.benefits_list_con}>
                    {benefits.map((benefit) => {
                        return (
                            <div key={benefit.id} className={styles.benefits_list}>
                                <div className={styles.benefits_list_info}>
                                    <img src={benefit.icon} alt="study" className={styles.benefits_list_img} />
                                    <h3 className={styles.benefits_list_title}>{benefit.name}</h3>
                                </div>

                                <div className={styles.benefits_list_des}>
                                    <p className={styles.benefits_list_text}>
                                        {benefit.des}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BENEFITS