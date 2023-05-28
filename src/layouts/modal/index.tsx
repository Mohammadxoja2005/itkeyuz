import React, { FC, useState, Fragment, useEffect } from 'react'
// styles
import styles from "./index.module.scss";
// headlessui 
import { Dialog, Transition } from '@headlessui/react'
// jotai
import { useAtom } from "jotai";
import { useOpenModal } from '../../hooks/useOpenModal';

const MODAL: FC = () => {
    const [isOpen, setIsOpen] = useAtom(useOpenModal);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsOpen(true);
    //     }, 5000)
    // }, [])

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={closeModal} className={styles.modal}>
                <Dialog.Panel>
                    <Dialog.Title
                        as="h3"
                        className={styles.modal_title}>
                        Оставьте заявку
                    </Dialog.Title>

                    <form className={styles.modal_form}>
                        <input className={styles.modal_input} type="text" placeholder='Ф.И.О.' />
                        <input className={styles.modal_input} type="text" placeholder='Номер телефона' />
                        <div className={styles.modal_agg_con}>
                            <div className={styles.modal_checkbox_style} >
                                <input className={styles.modal_agg_checkbox} type="checkbox" />
                            </div>
                            <p className={styles.modal_agreement} >Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности*</p>
                        </div>
                        <button className={styles.modal_btn} >Отправить заявку</button>
                    </form>
                </Dialog.Panel>
            </Dialog>
        </Transition>
    )
}

export default MODAL;