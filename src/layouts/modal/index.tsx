import React, { FC, useState, Fragment, useEffect } from 'react'
// styles
import styles from "./index.module.scss";
// react-router-dom
import { useNavigate } from 'react-router-dom';
// headlessui 
import { Dialog, Transition } from '@headlessui/react'
// jotai
import { useAtom } from "jotai";
import { useOpenModal } from '../../hooks/useOpenModal';
// axios
import axios from "axios";
// react-toastify
import { ToastContainer, toast } from 'react-toastify';

const MODAL: FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useAtom(useOpenModal);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [nextSchedule, setNextSchedule] = useState<boolean>(false);
    const schedule = [1000, 3000];
    const isModalOpen = localStorage.getItem('isModalOpen');

    useEffect(() => {
        // for (let i = 0; i < schedule.length; ++i) {
        //     setTimeout(() => {
        //         setIsOpen(true);
        //     }, schedule[i])
        // }  

        if (isModalOpen == '0') {
            return;
        }

        setTimeout(() => {
            setIsOpen(true);
        }, 10000)

        if (nextSchedule == true && isOpen == false) {
            setTimeout(() => {
                setIsOpen(true);
                setNextSchedule(false);
            }, 30000)
        }

    }, [nextSchedule])

    const notify = () => toast("Форма успешна отправлена");

    const onSubmit = (e: any) => {
        e.preventDefault();

        setNextSchedule(false);
        setIsOpen(false);

        axios.post('https://backend-itkey.ikcrm.uz/create', { name, phone })
            .then((response) => {
                setIsOpen(false);
            })
            .then(() => {
                notify()
            })
            .then(() => {
                navigate('/notification')
            })
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <ToastContainer />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className={styles.modal}>
                    <Dialog.Panel>
                        <Dialog.Title
                            as="h3"
                            className={styles.modal_title}>
                            Оставьте заявку
                        </Dialog.Title>
                        <form className={styles.modal_form}>
                            <input onChange={(e) => setName(e.target.value)} className={styles.modal_input} type="text" placeholder='Ф.И.О.' />
                            <input onChange={(e) => setPhone(e.target.value)} className={styles.modal_input} type="text" placeholder='Номер телефона' />
                            <div className={styles.modal_agg_con}>
                                <div className={styles.modal_checkbox_style} >
                                    <input className={styles.modal_agg_checkbox} type="checkbox" />
                                </div>
                                <p className={styles.modal_agreement} >Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности*</p>
                            </div>
                            <button onClick={onSubmit} className={styles.modal_btn} >Отправить заявку</button>
                        </form>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        </div>

    )
}

export default MODAL;