import React, { FC, useEffect } from 'react';
import styles from "./index.module.scss";

import HEADER from '../../layouts/header';
import BENEFITS from './components/benefits';
import SERVICES from './components/services';
import TEAM from './components/team';
import CLIENT from './components/clients';
import OFFER from './components/offer';
import FOOTER from '../../layouts/footer';
import Banner from './components/banner';
import MODAL from '../../layouts/modal';
// react-helmet
import { Helmet, HelmetProvider } from "react-helmet-async";
// google analytics
import ReactGA from 'react-ga';

const HOME: FC = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

        (window as any).ym(89525194, 'hit', window.location.href);

    }, [])


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>IT-Key</title>
                    <meta name="Основная страница" content="Добро пожаловать на наш сайт ItKey" />
                    <link rel="canonical" href="/" />
                </Helmet>

                <MODAL />
                <HEADER />
                <Banner />
                <BENEFITS />
                <SERVICES />
                <TEAM />
                <CLIENT />
                <OFFER />
                <FOOTER />
            </HelmetProvider>
        </>
    )
}

export default HOME;