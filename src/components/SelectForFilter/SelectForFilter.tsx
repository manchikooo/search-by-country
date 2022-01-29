import React, {Dispatch, SetStateAction} from 'react'
import styles from './SelectForFilter.module.css'

type FilterButtonsPropsType = {
    setRegion: Dispatch<SetStateAction<string>>
}

export const SelectForFilter = (props: FilterButtonsPropsType) => {

    const regions = ['All countries', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']


    const regionsList = regions.map((region, i) =>
        <option key={i} value={region}>{region}</option>)

    return (
        <div>
            <select className={styles.selectStyle}
                    onChange={(e) => props.setRegion(e.currentTarget.value)}>
                {regionsList}
            </select>
        </div>
    );
};
