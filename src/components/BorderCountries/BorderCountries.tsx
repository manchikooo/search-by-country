import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "../Button/Button";

type BorderCountriesType = {
    borderCountries: Array<{ name: string }>
}


export const BorderCountries = (props: BorderCountriesType) => {
    return (
        <>
            {props.borderCountries.map((b) =>
                <NavLink key={b.name} to={`/search-by-country/${b.name}`}><Button title={b.name}/></NavLink>)}
        </>
    );
};