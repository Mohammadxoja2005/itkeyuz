import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// swiper
import { SwiperSlide, Swiper } from "swiper/react";

const CLIENT: FC = () => {
    return (
        <section className={styles.client}>
            <div className={styles.client_con}>
                <div className={styles.client_title_con}>
                    <h2 className={styles.client_title}>Наши клиенты</h2>
                    <div className={styles.client_line}></div>
                </div>

                <div className={styles.client_slide_con}>
                    <Swiper
                        slidesPerView={4.5}
                        spaceBetween={50}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                            return (
                                <SwiperSlide>
                                    <div className={styles.client_slide}>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CLIENT;