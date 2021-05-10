import * as React from 'react';
import styles from './Spinner.module.css';

export const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <i className="fa fa-circle-o-notch fa-spin fa-2x" />
        </div>
    );
};

