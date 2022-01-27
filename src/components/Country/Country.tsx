import React from 'react';
import styles from "../Countries/Countries.module.css";
import {CountryNameType} from "../Countries/Countries";

type CountryPropsType = {
    countries: Array<CountryNameType>
}

const Country = (props: CountryPropsType) => {
    return (
        <>
            {props.countries?.map(country =>
                <div key={country.name} className={styles.countryBlock}>
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
            )}
        </>
    );
};

export default Country;