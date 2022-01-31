import React from 'react';
import styles from "./FlagAndCountryHeader.module.css";
import {CountryType} from "../../../App";

type FlagAndCountryHeaderPropsType = {
    c: CountryType
    countryName: string | undefined
}

export const FlagAndCountryHeader = (props: FlagAndCountryHeaderPropsType) => {
    return (
        <div className={styles.flagContainer}>
            <img alt={`${props.countryName} flag`} src={`${props.c.flag}`}/>
            <h3>{props.c.name}</h3>
        </div>
    );
};
