import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// data 
import { services } from '../../../../data/data';
// jotai
import { useAtom } from "jotai";
import { useOpenModal } from '../../../../hooks/useOpenModal';

const SERVICES: FC = () => {
    const [isOpen, setIsOpen] = useAtom(useOpenModal);

    console.log(isOpen);

    return (
        <section className={styles.services} >
            <div className={styles.services_con}>
                <div className={styles.services_title_con}>
                    <h2 className={styles.services_title}>Наши услуги</h2>
                    <p className={styles.services_title_des}>Определив задачи Вашего бизнеса в интернете, наша команда поможет сделать правильный выбор с учётом нужных функций в рамках Вашего бюджета.</p>
                    <div className={styles.services_line}></div>
                </div>

                <div className={styles.services_list_con}>
                    {services.map((service) => {
                        return (
                            <div key={service.id} onClick={() => setIsOpen(true)} className={styles.services_list}>
                                <div className={styles.service_list_content}>
                                    <img className={styles.services_list_icon} src={service.icon} alt="itkey service icon" />
                                    <h3 className={styles.services_list_name}>{service.name}</h3>

                                    <div className={styles.services_list_bulletpoints_con}>
                                        {service.des.map((bullet) => {
                                            return (
                                                <div key={bullet.id} className={styles.services_list_des_con}>
                                                    <div className={styles.services_list_point}></div>
                                                    <p className={styles.services_list_des}>
                                                        {bullet.bulletPoint}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className={styles.services_list_order}>
                                    <h4 className={styles.services_list_price}>от {service.price} сум</h4>
                                    <div className={styles.services_list_btn}>Заказать</div>
                                </div>

                            </div>
                        )
                    })}
                    <div className={styles.services_list_individual}>
                        <div className={styles.service_list_content}>
                            <h3 className={styles.services_list_name} style={{ textAlign: "center" }}>Индивидуальные решения</h3>

                            <div className={styles.services_list_bulletpoints_con} style={{ display: "block" }}>
                                <p className={styles.services_list_des} style={{ textAlign: "center" }}>
                                    Если не получилось ничего выбрать, будем рады персональной заявке и готовы рассчитать индивидуальную стоимость Вашего сайта для расчёта особенного проекта для Вашего бизнеса.
                                </p>
                            </div>
                        </div>

                        <div className={styles.services_list_order}>
                            <div className={styles.services_list_btn}>Заказать</div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SERVICES