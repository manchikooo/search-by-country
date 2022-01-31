import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {BordersType, CountryType} from "../../App";
import styles from './Country.module.css'
import {BiArrowBack} from "@react-icons/all-files/bi/BiArrowBack";
import {BorderCountries} from "../BorderCountries/BorderCountries";
import {CountryInfoDetails} from "./CountryInfoDetails/CountryInfoDetails";
import {FlagAndCountryHeader} from "./FlagAndCountryHeader/FlagAndCountryHeader";

export type BordersCountriesType = Array<{ borders: BordersType }>

export const Country = () => {

    const {countryName} = useParams()
    const navigationBack = useNavigate()

    const [countryInDetails, setCountryInDetails] = useState<Array<CountryType>>([])
    const [borderCountries, setBorderCountries] = useState<{
        name: string
    }[]>([])

    useEffect(() => {
        axios.get<Array<CountryType>>(`https://restcountries.com/v2/name/${countryName}?fields=name,region,flag,population,nativeName,subregion,capital,topLevelDomain,currencies,languages`)
            .then(res => {
                setCountryInDetails(res.data)

                axios.get<BordersCountriesType>(`https://restcountries.com/v2/name/${countryName}?fields=borders`)
                    .then(res => {
                        if (res.data[0].borders.length > 0) {
                            let countryString = res.data[0].borders.join(',')

                            axios.get(`https://restcountries.com/v2/alpha?codes=${countryString}&fields=name`)
                                .then(res => setBorderCountries(res.data))
                        }
                    })
            })
    }, [countryName])


    const backNavigation = () => navigationBack(-1)

    return (
        <div className={styles.countryContainer}>
            <div className={styles.backButtonContainer}>
                <div className={styles.backNavigationButton} onClick={backNavigation}>
                    <BiArrowBack/>
                    <div>Back</div>
                </div>
            </div>
            <div className={styles.mappedCountries}>
                {countryInDetails.map(c => {
                    return <div className={styles.countryWrapper} key={c.name}>
                        <FlagAndCountryHeader c={c} countryName={countryName}/>
                        <CountryInfoDetails c={c}/>
                    </div>
                })}
            </div>
            <div className={styles.BorderCountriesBlock}>
                <h4>
                    Border Countries:
                </h4>
                <div className={styles.BorderCountriesButtonsContainer}>
                    <BorderCountries borderCountries={borderCountries}/>
                </div>

            </div>
        </div>
    );
};
