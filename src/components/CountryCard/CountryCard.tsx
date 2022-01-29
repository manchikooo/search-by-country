import React from 'react';
import styles from "./CountryCard.module.css";
import {CountryType} from "../../App";
import {NavLink} from "react-router-dom";

type CountryPropsType = {
    countries: Array<CountryType>
}

const CountryCard = (props: CountryPropsType) => {
    return (
        <>
            {props.countries?.map(country =>
                <NavLink to={`/${country.name}`} className={styles.countryBlock} key={country.name}>
                    <div>
                        <div className={styles.flagContainer}>
                            <img alt={`${country.name} flag`} src={country.flag}/>
                        </div>
                        <div className={styles.countryInfoContainer}>
                            <h2>{country.name}</h2>
                            <div>
                                <span>Population: </span>
                                {country.population}
                            </div>
                            <div>
                                <span>Region: </span>
                                {country.region}
                            </div>
                            <div>
                                <span>Capital: </span>
                                {country.capital}
                            </div>
                        </div>
                    </div>
                </NavLink>
            )}
        </>
    );
};

export default CountryCard;