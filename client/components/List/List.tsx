import { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { getDetails } from '../../apollo/queries/getDetails';

import styles from './list.module.scss';

export const List = () => {
  const [getDetailsQuery, { data, loading, fetchMore }] = useLazyQuery(getDetails);
  const [detailsArray, setDetailsArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setDetailsArray(data?.details || [])
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
    setDetailsArray([...detailsArray, ...newData.details])
  }

  return (
    <>
      <SearchBar setInputValue={setInputValue} />
      <div>Results for : {inputValue}</div>
      <div>
        {detailsArray?.map((detail, index: number) => (
          <div className={styles.cardContainer} key={`${detail?.name}-${index}`}>
            <div>{detail?.name}</div>
            <div>{detail?.address}</div>
          </div>
        ))}
      </div>
      <div onClick={fetchMoreData}>Load more data</div>
    </>
  )
}