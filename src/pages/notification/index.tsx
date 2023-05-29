import React, { FC, useEffect, useState } from 'react'
// styles
import styles from "./index.module.scss";
// react-router-dom
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

const NOTIFICATION: FC = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(3);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, [])

    useEffect(() => {
        if (seconds <= 0) {
            navigate('/')
        }

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds])

    return (
        <>
            <div className={styles.notify}>
                <div className={styles.notify_con}>
                    <h3 className={styles.notify_title}>Форма успешна отправлено</h3>
                    <p className={styles.notify_des}>Вы будете перенаправлены на основную страницу через {seconds}</p>
                </div>
            </div>
        </>
    )
}

export default NOTIFICATION