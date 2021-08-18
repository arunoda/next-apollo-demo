import React from 'react';
import { FunctionComponent } from "react"

import styles from './searchbar.module.scss';

interface Props {
  setInputValue: (inputValue: string) => void
}

export const SearchBar: FunctionComponent<Props> = ({ setInputValue }) => {

  const onChange = (e: any) => {
    const value = e.target.value
    if (value.length >= 3)
      setInputValue(value)
    else setInputValue('')
  }

  return (
    <>
      <input
        className={styles.input}
        name='searchBar'
        type='text'
        onChange={onChange}
        data-testid='searchBar'
        placeholder='Search...'
      />
    </>
  )
}