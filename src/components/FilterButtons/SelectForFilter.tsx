import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {CountryType} from "../../App";

type FilterButtonsPropsType = {
    countriesFromServer: Array<CountryType>
    setCountries: Dispatch<SetStateAction<CountryType[]>>
    setCountriesInput: Dispatch<SetStateAction<CountryType[]>>
}

export const SelectForFilter = (props: FilterButtonsPropsType) => {

    const [region, setRegion] = useState<string | null>(null)

    useEffect(() => {
        if (region === 'All') {
            props.setCountries(props.countriesFromServer)
            props.setCountriesInput(props.countriesFromServer)
        } else if (region) {
            props.setCountries(props.countriesFromServer.filter(country => country.region === region))
            props.setCountriesInput(props.countriesFromServer.filter(country => country.region === region))
        }
    }, [region])

    return (
        <div>
            <select onChange={(e) => setRegion(e.currentTarget.value)}>
                <option value='All'>All</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    );
};
