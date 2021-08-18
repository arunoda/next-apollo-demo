import React from 'react';
import { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { GET_DETAILS } from '../../apollo/queries/getDetails';

import styles from './list.module.scss';

export const List = () => {
  const [getDetailsQuery, { data, loading, fetchMore }] = useLazyQuery(GET_DETAILS);
  const [detailsArray, setDetailsArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [shouldFetchMore, setShouldFetchMore] = useState(false);

  useEffect(() => {
    setDetailsArray(data?.details || []);
    data?.details.length < 20 ? setShouldFetchMore(false) : setShouldFetchMore(true);
  }, [data])

  useEffect(() => {
    getDetailsQuery({
      variables: {
        offset: 0,
        limit: 20,
        search: inputValue
      }
    })
  }, [inputValue])

  const fetchMoreData = async () => {
    const { data: newData } = await fetchMore({
      variables: {
        limit: 20,
        search: inputValue,
        offset: detailsArray.length
      },
    })
    newData?.details.length < 20 ? setShouldFetchMore(false) : setShouldFetchMore(true);
    setDetailsArray([...detailsArray, ...newData.details])
  }

  return (
    <div>
      <SearchBar setInputValue={setInputValue} />
      {inputValue !== '' && <div className={styles.resultsLabel}>Results for : {inputValue}</div>}

      <div className={styles.listContainer}>
        {loading ? <div>loading</div>
          : detailsArray?.map((detail, index: number) => (
            <div className={styles.cardContainer} key={`${detail?.name}-${index}`} data-testid='cardContainer'>
              <div>{detail?.name}</div>
              <div>{detail?.address}</div>
            </div>
          ))
        }
      </div>
      {shouldFetchMore &&
        <div className={styles.loadButton} data-testid='loadButton' onClick={fetchMoreData}>Load more data</div>
      }
    </div>
  )
}