import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "../Button/Button";

type BorderCountriesType = {
    borderCountries: {
        name: string
    }[]
}


export const BorderCountries = (props: BorderCountriesType) => {
    console.log(props.borderCountries, 'border countr')
    return (
        <>
            {props.borderCountries.map((b, i) =>
                <NavLink key={i} to={`/search-by-country/${b.name}`}><Button title={b.name}/></NavLink>)}
        </>
    );
};
