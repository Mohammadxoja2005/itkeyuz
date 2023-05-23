import React, { FC } from 'react';
import styles from "./index.module.scss";

import HEADER from '../../layouts/header';
import BENEFITS from './components/benefits';
import SERVICES from './components/services';
import TEAM from './components/team';

const HOME: FC = () => {
    return (
        <>
            <HEADER />
            <BENEFITS />
            <SERVICES />
            <TEAM />
        </>
    )
}

export default HOME;