import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <a href='/'>Where in the world?</a>
        </div>
    );
};

export default Header;

