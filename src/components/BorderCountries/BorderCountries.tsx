import React from 'react';
import {NavLink} from "react-router-dom";

type BorderCountriesType = {
    borderCountries: {
        name: string
    }[]
}


export const BorderCountries = (props: BorderCountriesType) => {
    console.log(props.borderCountries, 'border countr')
    return (
        <>
            {props.borderCountries.map(b => <NavLink to={`/country/${b.name}`}>{b.name}</NavLink>)}
        </>
    );
};
