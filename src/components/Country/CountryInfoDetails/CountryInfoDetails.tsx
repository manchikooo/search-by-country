import React from 'react';
import styles from './CountryInfoDetails.module.css'
import {CountryType} from "../../../App";

type CountryInfoDetailsPropsType = {
    c: CountryType
}

export const CountryInfoDetails = (props: CountryInfoDetailsPropsType) => {

    const topLevelDomain = props.c.topLevelDomain.map(d => d)
    const currencies = props.c.currencies.map((cur, i) => i !== props.c.currencies.length - 1 ?
        <span key={i}>{cur.name}, </span> : <span key={i}>{cur.name}</span>)
    const languages = props.c.languages.map((lang, i) => i !== props.c.languages.length - 1 ?
        <span key={lang.name}>{lang.name}, </span> : <span key={lang.name}>{lang.name}</span>)

    return (
        <div className={styles.countryInfoList}>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Native Name:</div>
                <div>{props.c.nativeName}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Population:</div>
                <div>{props.c.population}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Region:</div>
                <div>{props.c.region}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Sub Region:</div>
                <div>{props.c.subregion}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Capital:</div>
                <div>{props.c.capital}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Top Level Domain:</div>
                <div>{topLevelDomain}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Currencies:</div>
                <div className={styles.infoOfListsKey}>{currencies}</div>
            </div>
            <div className={styles.elOfList}>
                <div className={styles.keyOfList}>Languages:</div>
                <div className={styles.infoOfListsKey}>{languages}</div>
            </div>
        </div>
    );
};
