import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {CountryType} from "../../App";

type FilterButtonsPropsType = {
    initialCountries: Array<CountryType>
    setCountries: Dispatch<SetStateAction<CountryType[]>>
}

type RegionsFilterType = 'All' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

export const FilterButtons = (props: FilterButtonsPropsType) => {

    const [region, setRegion] = useState<RegionsFilterType>('All')

    useEffect(() => {
        if (region === 'All') {
            props.setCountries(props.initialCountries)
        }
        if (region === 'Africa' || region === 'Americas' || region === 'Asia' || region === 'Europe' || region === 'Oceania') {
            props.setCountries(props.initialCountries.filter(country => country.region === region))
        }
    }, [region])

    const filterCountries = (region: RegionsFilterType) => {
        setRegion(region)
    }

    return (
        <div>
            <button onClick={() => filterCountries('All')}>All</button>
            <button onClick={() => filterCountries('Africa')}>Africa</button>
            <button onClick={() => filterCountries('Americas')}>America</button>
            <button onClick={() => filterCountries('Asia')}>Asia</button>
            <button onClick={() => filterCountries('Europe')}>Europe</button>
            <button onClick={() => filterCountries('Oceania')}>Oceania</button>
        </div>
    );
};
