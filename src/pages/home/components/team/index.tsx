import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

const TEAM: FC = () => {
    return (
        <section className={styles.team}>
            <div className={styles.team_con}>
                <div className={styles.team_title_con}>
                    <h2 className={styles.team_title}>Наша команда</h2>
                    <div className={styles.team_line}></div>
                    <p className={styles.team_title_des}>Мы – команда профессионалов, которые рады проектам любой сложности благодаря опыту и постоянному развитию. Давайте знакомиться!</p>
                </div>

                <div className={styles.team_people}>
                    <Swiper
                        breakpoints={{
                            992: {
                                slidesPerView: 4.5
                            },
                            768: {
                                slidesPerView: 3.5
                            },
                            576: {
                                slidesPerView: 2.5
                            },
                            0: {
                                slidesPerView: 2.5
                            }
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
                            return (
                                <SwiperSlide>
                                    <div key={idx} className={styles.team_person}>
                                        <div className={styles.team_person_img}>
                                            <img src="" alt="" />
                                        </div>
                                        <h3 className={styles.team_person_name}>Суперпупер Офигетьктото</h3>
                                        <p className={styles.team_person_des}>Супергерой</p>
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

export default TEAM