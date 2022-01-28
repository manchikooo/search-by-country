import React from 'react';
import Country from "../Country/Country";
import styles from "../../App.module.css";
import {CountryType} from "../../App";

type CountriesPropsType = {
    countries: Array<CountryType>
}

export const Countries = (props: CountriesPropsType) => {

    return (
        <div className={styles.CountriesWrapper}>
            <Country countries={props.countries}/>
        </div>
    );
};
