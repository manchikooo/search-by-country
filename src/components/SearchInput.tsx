import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {CountryType} from "../App";

type SearchInputPropsType = {
    countries: Array<CountryType>
    setCountries: Dispatch<SetStateAction<CountryType[]>>
}

export const SearchInput = (props: SearchInputPropsType) => {

    const [words, setWords] = useState('')

    const filterCountriesByName = (inputValue: string) => {
        const filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(inputValue.toLowerCase()))
        props.setCountries(filteredCountries)
    }

    useEffect(() => {
        filterCountriesByName(words)
    }, [words])

    return (
        <div>
            <input type='search'
                   placeholder='Search'
                   value={words}
                   onChange={(e) => setWords(e.currentTarget.value)}
            />
        </div>
    );
};

