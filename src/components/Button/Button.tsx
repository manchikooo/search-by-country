import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className={styles.ButtonStyle}>
            {props.title}
        </div>
    );
};
