import React, { FC } from 'react';
import styles from "./index.module.scss";

import HEADER from '../../layouts/header';
import BENEFITS from './components/benefits';
import SERVICES from './components/services';
import TEAM from './components/team';
import CLIENT from './components/clients';
import OFFER from './components/offer';
import FOOTER from '../../layouts/footer';

const HOME: FC = () => {
    return (
        <>
            {/* <HEADER />
            <BENEFITS /> */}
            {/* <SERVICES /> */}
            {/* <TEAM /> */}
            {/* <CLIENT /> */}
            <OFFER />
            {/* <FOOTER /> */}
        </>
    )
}

export default HOME;