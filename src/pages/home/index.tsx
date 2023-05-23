import React, { FC } from 'react';
import styles from "./index.module.scss";

import HEADER from '../../layouts/header';
import BENEFITS from './components/benefits';
import SERVICES from './components/services';

const HOME: FC = () => {
    return (
        <>
            <HEADER />
            <BENEFITS />
            <SERVICES />
        </>
    )
}

export default HOME;