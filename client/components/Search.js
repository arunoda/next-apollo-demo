import React, { useState, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import useDebounce from "./helpers/Debounce";
import styles from './Search.module.css'

const Component = props => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchTerm = useDebounce(searchInput);

  const searchQuery = gql`
  query Users($name: String) {
    users (name: $name) {
      name
      address
      email
      phone
    }
  }`

  const [runQuery, { data }] = useLazyQuery(
    searchQuery,
    {
      variables: {
        name: searchInput.toString().trim()
      }
    }
  );

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length > 0) {
      runQuery();
      if (data && data.users) {
        props.onSearch(data.users)
      }
    }
  }, [debouncedSearchTerm]);


  return (
    <div className="cards__action">
      <input
          className={styles.input}
          type="text"
          name="search"
          placeholder="Type your search"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
    </div>
  )
}

export default Component
