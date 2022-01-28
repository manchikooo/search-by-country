import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Countries} from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import styles from './App.module.css'
import {SearchInput} from "./components/SearchInput";
import {SelectForFilter} from "./components/FilterButtons/SelectForFilter";
import axios from "axios";

export type CountryType = {
    name: string
    region: string
    flag: string
    population: number
    capital?: string
}

function App() {

    const [countriesFromServer, setCountriesFromServer] = useState<Array<CountryType>>([])
    const [countriesForSelect, setCountriesForSelect] = useState<Array<CountryType>>([])
    const [countriesForInput, setCountriesForInput] = useState<Array<CountryType>>([])

    useEffect(() => {
        axios.get<Array<CountryType>>(`https://restcountries.com/v2/all?fields=name,region,flag,population,capital`)
            .then(response => {
                setCountriesFromServer(response.data)
                setCountriesForSelect(response.data)
                setCountriesForInput(response.data)
            })
    }, [])

    console.log(countriesFromServer)
    console.log(countriesForSelect)
    console.log(countriesForInput)

    return (
        <div className={styles.AppContainer}>
            <div className={styles.App}>
                <Header/>
                <SearchInput
                    countries={countriesForSelect}
                    setCountries={setCountriesForInput}
                />
                <SelectForFilter
                    countriesFromServer={countriesFromServer}
                    setCountries={setCountriesForSelect}
                    setCountriesInput={setCountriesForInput}
                />
                <Countries countries={countriesForInput}/>
            </div>
        </div>
    );
}

export default App;
