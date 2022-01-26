// User component , typescript

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styles from './Users.module.css';
import { QUERY, errMessage, batchCount } from "../../lib/constant";

export default function Users() {

  //inital query

  const { fetchMore } = useQuery(
    QUERY,
    {
      variables: {
        count: 0,
        page: 1
      },
      fetchPolicy: "cache-and-network", // fetch data from cache and update the cache from network
      skip: true
    }
  );

  //initializing hooks

  const [userlist, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNext] = useState(false);

  useEffect(() => {
    setLoading(true);
    handleLoadMore();
  },[])


  // load more
  const handleLoadMore = () => {
    fetchMore({
      variables: {
        count: batchCount,
        page
      }
    })
    .then(res => {

      // getting the users lists from response based on response type

      const users = (res.data && res.data.UsersList && Array.isArray(res.data.UsersList.users) && res.data.UsersList.users) || [];
      setUserList(list => [...list ,...users]);

      // checking if there is more page for user-listc
      const isNextpage = res.data && res.data.UsersList && res.data.UsersList.hasNextPage;  

      // updating the page number for next user-list API call if there is more pages available
      isNextpage && setPage(index => index + 1);

      setHasNext(isNextpage);

      // resetting the loader
      setLoading(false);

    })
    .catch((e)=> {
      setError(e);
      setLoading(false);
    })
  }

  // rendering user grid with data

  return (<>
      {!error && !loading && <div className='cards'>
        {Array.isArray(userlist) && userlist.map((user, index) => (
          <section key={`user-list-${index+1}`} className={styles.card}>
            <p className='fwB'>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address}</p>
          </section>
          ))}
      </div>}
      {!error && loading && 'Loading ...'}
      {!loading && !error && hasNextPage && (<button
          className={styles.loadMore}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      {error && errMessage}
    </>
  );
}
