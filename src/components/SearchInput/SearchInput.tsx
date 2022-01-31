import React, {Dispatch, SetStateAction} from 'react'
import styles from './SearchInput.module.css'
import {AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";

type SearchInputPropsType = {
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}

export const SearchInput = (props: SearchInputPropsType) => {
    return (
            <div className={styles.searchBox}>
                <AiOutlineSearch/>
                <input className={styles.searchInput}
                       type='search'
                       name=''
                       placeholder='Search for a country'
                       value={props.inputValue}
                       onChange={(e) => props.setInputValue(e.currentTarget.value)}
                />
        </div>
    );
};

