import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {BordersType, CountryType} from "../../App";
import styles from './Country.module.css'
import {BiArrowBack} from "@react-icons/all-files/bi/BiArrowBack";
import {BorderCountries} from "../BorderCountries/BorderCountries";

export type BordersCountriesType = Array<{ borders: BordersType }>

export const Country = () => {

    const {countryName} = useParams()
    const navigationBack = useNavigate()

    const [countryInDetails, setCountryInDetails] = useState<Array<CountryType>>([])
    const [borderCountries, setBorderCountries] = useState<{
        name: string
    }[]>([])

    useEffect(() => {
        axios.get<Array<CountryType>>(`https://restcountries.com/v2/name/${countryName}?fields=name,region,flag,population,nativeName,subregion,capital,topLevelDomain,currencies,languages`).then(res => {
            console.log(res.data)
            setCountryInDetails(res.data)

            axios.get<Array<{ borders: BordersType }>>(`https://restcountries.com/v2/name/${countryName}?fields=borders`).then(res => {
                console.log(res.data)
                // setBorderCountries(res.data[0].borders)
                if (res.data[0].borders.length > 0) {
                    let countrString = res.data[0].borders.join(',')
                    axios.get(`https://restcountries.com/v2/alpha?codes=${countrString}&fields=name`).then(res => setBorderCountries(res.data))
                }
            })
        })
    }, [countryName])

    console.log(countryName)
    console.log(borderCountries)

    const backNavigation = () => navigationBack(-1)

    return (
        <>
            {countryInDetails.map(c => {

                const topLevelDomain = c.topLevelDomain.map(d => d)
                const currencies = c.currencies.map(cur => cur.name)
                const languages = c.languages.map(lang => lang.name)

                return <div className={styles.countryWrapper} key={c.name}>
                    <div className={styles.backButtonContainer}>
                        <div className={styles.backNavigationButton} onClick={backNavigation}>
                            <BiArrowBack/>
                            <div>Back</div>
                        </div>
                    </div>
                    <div className={styles.flagContainer}>
                        <img alt={`${countryName} flag`} src={`${c.flag}`}/>
                        <h3>{c.name}</h3>
                    </div>
                    <div className={styles.countryInfoList}>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Native Name:</div>
                            <div>{c.nativeName}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Population:</div>
                            <div>{c.population}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Region:</div>
                            <div>{c.region}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Sub Region:</div>
                            <div>{c.subregion}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Capital:</div>
                            <div>{c.capital}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Top Level Domain:</div>
                            <div>{topLevelDomain}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Currencies:</div>
                            <div>{currencies}</div>
                        </div>
                        <div className={styles.elOfList}>
                            <div className={styles.keyOfList}>Languages:</div>
                            <div>{languages}</div>
                        </div>
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
            })}

        </>
    );
};
