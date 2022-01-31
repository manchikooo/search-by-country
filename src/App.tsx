import React, {useEffect, useState} from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import styles from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "./components/Homepage/Homepage";
import axios from "axios";
import {Country} from "./components/Country/Country";

type CurrencyType = {
    code: string
    name: string
    symbol: string
}
type LanguageType = {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}
export type BordersType = Array<string>

export type CountryType = {
    name: string
    region: string
    flag: string
    population: number
    nativeName: string
    subregion: string
    capital: string
    topLevelDomain: Array<string>
    currencies: Array<CurrencyType>
    languages: Array<LanguageType>
    borders: BordersType
}

function App() {

    const [countriesFromServer, setCountriesFromServer] = useState<Array<CountryType>>([])

    const [inputValue, setInputValue] = useState('')
    const [region, setRegion] = useState<string>('All countries')

    useEffect(() => {
        axios.get<Array<CountryType>>(`https://restcountries.com/v2/all?fields=name,region,flag,population,capital`)
            .then(response => {
                setCountriesFromServer(response.data)
            })
    }, [])

    const filterByRegion = countriesFromServer.filter(country => {
        if (region === 'All countries') {
            return country
        }
        return country.region === region
    })
    const filterCountriesByName = filterByRegion.filter(country => country.name.toLowerCase().includes(inputValue.toLowerCase()))

    console.log('App')

    return (
        <BrowserRouter>
            <Header/>
            <div className={styles.AppContainer}>
                <Routes>
                    <Route path={'/search-by-country/'}
                           element={
                               <Homepage inputValue={inputValue}
                                         setInputValue={setInputValue}
                                         setRegion={setRegion}
                                         filterCountriesByName={filterCountriesByName}
                               />
                           }
                    />
                    <Route path={'/search-by-country/:countryName'}
                           element={
                               <Country/>
                           }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
