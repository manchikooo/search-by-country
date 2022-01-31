import React, {Dispatch, SetStateAction} from 'react';
import styles from './Homepage.module.css'
import {SearchInput} from "../SearchInput/SearchInput";
import {SelectForFilter} from "../SelectForFilter/SelectForFilter";
import {Countries} from "../Countries/Countries";
import {CountryType} from "../../App";

type HomepagePropsType = {
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
    setRegion: Dispatch<SetStateAction<string>>
    filterCountriesByName: Array<CountryType>
}

export const Homepage = (props: HomepagePropsType) => {

    return (
        <div className={styles.homepageWrapper}>
            <div className={styles.filterBlock}>
                <SearchInput inputValue={props.inputValue} setInputValue={props.setInputValue}/>
                <SelectForFilter setRegion={props.setRegion}/>
            </div>
            <div className={styles.countriesWrapper}>
                <Countries countries={props.filterCountriesByName}/>
            </div>
        </div>
    );
};
