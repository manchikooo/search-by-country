import React from 'react';
import Country from "../Country/Country";
import styles from "../../App.module.css";
import {CountryType} from "../../App";

type CountriesPropsType = {
    initialCountries: Array<CountryType>
}

export const Countries = (props: CountriesPropsType) => {

    return (
        <div className={styles.CountriesWrapper}>
            <Country initialCountries={props.initialCountries}/>
        </div>
    );
};
