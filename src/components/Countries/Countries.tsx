import React from 'react';
import CountryCard from "../CountryCard/CountryCard";
import styles from "./Countries.module.css";
import {CountryType} from "../../App";

type CountriesPropsType = {
    countries: Array<CountryType>
}

export const Countries = (props: CountriesPropsType) => {
    return (
        <>
            <CountryCard countries={props.countries}/>
        </>
    );
};
