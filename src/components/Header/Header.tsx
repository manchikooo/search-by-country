import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import {IoMoon} from "@react-icons/all-files/io5/IoMoon";

const Header = () => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerBlock}>
                <a href='/search-by-country/'>Where in the world?</a>
                <div className={styles.themeSwitcher} onClick={toggleTheme}>
                    <IoMoon/>
                    <span>
                       {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;

