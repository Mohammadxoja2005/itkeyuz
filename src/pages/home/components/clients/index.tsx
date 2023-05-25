import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// swiper
import { SwiperSlide, Swiper } from "swiper/react";
// data
import { clients } from '../../../../data/data';

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
                        breakpoints={{
                            992: {
                                slidesPerView: 4.5
                            },

                            768: {
                                slidesPerView: 3.5
                            },
                            576: {
                                slidesPerView: 3.5
                            },
                            0: {
                                spaceBetween:10,
                                slidesPerView: 2.5
                            }
                        }}
                    >
                        {clients.map((client) => {
                            return (
                                <SwiperSlide key={client.id}>
                                    <div className={styles.client_slide}>
                                        <img src={client.img} alt="itkey clients" />
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