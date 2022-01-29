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
                    <div className={styles.backNavigationButton} onClick={backNavigation}>
                        <BiArrowBack/>
                        <div>Back</div>
                    </div>
                    <div className={styles.countryContainer}>
                        <div className={styles.flagContainer}>
                            <img alt={`${countryName} flag`} src={`${c.flag}`}/>
                        </div>
                        <div className={styles.countryInfoContainer}>
                            <div className={styles.countryInfoBlock}>
                                <ul className={styles.countryInfoList1}>
                                    <li><span>Native Name: </span>{c.nativeName}</li>
                                    <li><span>Population: </span>{c.population}</li>
                                    <li><span>Region: </span>{c.region}</li>
                                    <li><span>Sub Region: </span>{c.subregion}</li>
                                    <li><span>Capital: </span>{c.capital}</li>
                                </ul>
                                <ul className={styles.countryInfoList2}>
                                    <li><span>Top Level Domain: </span>{topLevelDomain}</li>
                                    <li><span>Currencies: </span>{currencies}</li>
                                    <li><span>Languages: </span>{languages}</li>
                                </ul>
                            </div>
                            <div>Border Countries: <BorderCountries borderCountries={borderCountries}/>
                            </div>
                        </div>

                    </div>
                </div>
            })}

        </>
    );
};
