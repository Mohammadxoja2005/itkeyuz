import React, { FC, useEffect } from 'react'
// styles
import styles from "./index.module.scss";
import ReactGA from 'react-ga';

const NOTIFICATION: FC = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, [])

    return (
        <>
            <div className={styles.notify}>

            </div>
        </>
    )
}

export default NOTIFICATION