import React, {useEffect, useState} from 'react';
import axios from "axios";
import Country from "../Country/Country";
import styles from "../../App.module.css";

export type CountryNameType = {
    name: string
    region: string
    flag: string
    population: number
    capital: string
}

export const Countries = () => {

    const [countries, setCountries] = useState<Array<CountryNameType>>([])

    useEffect(() => {
        axios.get<Array<CountryNameType>>(`https://restcountries.com/v2/all?fields=name,region,flag,population,capital`).then(response => setCountries(response.data))
    }, [])

    console.log(countries)

    return (
        <div className={styles.CountriesWrapper}>
            <Country countries={countries}/>
        </div>
    );
};
