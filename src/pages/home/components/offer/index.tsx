import React, { FC, useState, useEffect } from 'react'
// styles
import styles from "./index.module.scss";
// data 
import { offers } from '../../../../data/data';
// headless ui 
import { RadioGroup } from '@headlessui/react';
// react-toastify 
import { ToastContainer, toast } from 'react-toastify';
// axios
import axios from "axios";

const OFFER: FC = () => {
    const [inputRange, setInputRange] = useState<any>('0');
    const [price, setPrice] = useState<number>(1500000);
    const [select, setSelect] = useState<number>(1);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    useEffect(() => {
        setPrice(((248500000 * inputRange / 100) + 1500000))
    }, [inputRange])

    const notify = () => toast("Форма успешна отправлена");

    const onSubmit = (e: any) => {
        e.preventDefault();

        axios.post('http://95.130.227.39:3004/create', { name, phone })
            .then((response) => {
                notify()
            })
    }

    return (
        <section className={styles.offer}>
            <div className={styles.offer_con}>
                <div className={styles.offer_title_con}>
                    <h2 className={styles.offer_title} >Получите коммерческое предложение</h2>
                    <p className={styles.offer_des}>Заполните форму сейчас и наш специалист свяжется с вами для консультации и составит ваше персональное предложение. Вы получите более точное КП, если укажите полную информацию о проекте.</p>
                </div>

                <div className={styles.offer_types_con}>
                    <div className={styles.offer_types_name_con} >
                        <div className={styles.offer_bullet} ></div>
                        <h2 className={styles.offer_types_name}>Какие виды услуг вас интересуют? <span style={{ color: "red" }} >*</span></h2>
                    </div>
                    <RadioGroup value={select} onChange={setSelect}>
                        <div className={styles.offer_type_con}>
                            {offers.map((offer) => {
                                return (
                                    <RadioGroup.Option
                                        value={offer.id}
                                        className={({ checked }) => `${checked ? styles.offer_choice_clicked : styles.offer_choice}`}
                                        key={offer.id}
                                    >
                                        <div>
                                            {offer.name}
                                        </div>
                                    </RadioGroup.Option>
                                )
                            })}
                        </div>
                    </RadioGroup>
                </div>


                <div className={styles.offer_form}>
                    <div className={styles.offer_range}>

                        <div className={styles.offer_range_title_con}>
                            <div className={styles.offer_range_name_con}>
                                <div className={styles.offer_bullet} ></div>
                                <h2 className={styles.offer_types_name}>Бюджет проекта <span style={{ color: "red" }} >*</span></h2>
                            </div>
                            <p className={styles.offer_range_des}>Укажите примерную сумму, которую планируется потратить на реализацию проекта</p>
                        </div>

                        <div className={styles.offer_range_input_con}>
                            <div className={styles.offer_range_price_con} >
                                <p className={styles.offer_range_price}>
                                    {price}
                                </p>
                                <p className={styles.offer_range_price}>
                                    - 250 000 000
                                </p>
                            </div>
                            <input className={styles.offer_range_input} onChange={(e) => setInputRange(e.target.value)} value={inputRange} type="range" />
                        </div>


                    </div>
                    <div className={styles.offer_range_title_con}>
                        <div className={styles.offer_range_name_con}>
                            <div className={styles.offer_bullet} ></div>
                            <h2 className={styles.offer_types_name}>Расскажите о вашем проекте</h2>
                        </div>
                        <p className={styles.offer_range_des}>
                            <span style={{ color: "red" }} >*</span> -
                            Поля, обязательные для заполнения</p>
                    </div>

                    <div className={styles.offer_inputs_con}>
                        <div className={styles.offer_inputs}>
                            {/* <div className={styles.offer_input_border}>
                                <input type="text" placeholder='Адрес сайта' className={styles.offer_input} />
                            </div> */}
                            {/* <div className={styles.offer_input_border}>
                                <input type="text" placeholder='Название компании' className={styles.offer_input} />
                            </div> */}
                            {/* <div className={styles.offer_input_border}>
                                <input type="text" placeholder='Откуда узнали о нас' className={styles.offer_input} />
                            </div> */}
                            {/* <div className={styles.offer_input_border}>
                                <input type="text" placeholder='Ваш комментарий ' className={styles.offer_input} />
                            </div> */}
                            <div className={styles.offer_input_border}>
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Контактное лицо" className={styles.offer_input} />
                            </div>
                            {/* <div className={styles.offer_input_border}>
                                <input type="text" placeholder='Email' className={styles.offer_input} />
                            </div> */}
                            <div className={styles.offer_input_border}>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Телефон' className={styles.offer_input} />
                            </div>
                        </div>
                        <div className={styles.offer_agg_con}>
                            <div className={styles.offer_checkbox_style} >
                                <input className={styles.offer_agg_checkbox} type="checkbox" />
                            </div>
                            <p className={styles.offer_agreement} >Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности*</p>
                        </div>
                        <button onClick={onSubmit} className={styles.offer_btn}>Получить КП</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OFFER