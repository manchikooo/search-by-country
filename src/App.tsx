import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Countries} from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import styles from './App.module.css'
import {SearchInput} from "./components/SearchInput";
import {FilterButtons} from "./components/FilterButtons/FilterButtons";
import axios from "axios";
import {log} from "util";

export type CountryType = {
    name: string
    region: string
    flag: string
    population: number
    capital?: string
}

function App() {

    const [initialCountries, setInitialCountries] = useState<Array<CountryType>>([])
    const [countries, setCountries] = useState<Array<CountryType>>([])


    useEffect(() => {
        axios.get<Array<CountryType>>(`https://restcountries.com/v2/all?fields=name,region,flag,population,capital`)
            .then(response => {
                setInitialCountries(response.data)
                return axios.get<Array<CountryType>>(`https://restcountries.com/v2/all?fields=name,region,flag,population,capital`)
            })
            .then(res => setCountries(res.data))
    }, [])

    console.log(initialCountries)
    console.log(countries)

    return (
        <div className={styles.AppContainer}>
            <div className={styles.App}>
                <Header/>
                <SearchInput/>
                <FilterButtons
                    initialCountries={initialCountries}
                    setCountries={setCountries}
                />
                <Countries initialCountries={countries}/>
            </div>
        </div>
    );
}

export default App;
