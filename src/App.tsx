import React from 'react';
import './App.module.css';
import {Countries} from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import styles from './App.module.css'
import {SearchInput} from "./components/SearchInput";

function App() {
    return (
        <div className={styles.AppContainer}>
            <div className={styles.App}>
                <Header/>
                <SearchInput/>
                <Countries/>
            </div>
        </div>
    );
}

export default App;
