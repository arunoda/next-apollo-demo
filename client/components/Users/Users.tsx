// components/Users.tsx

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styles from './Users.module.css';
import { QUERY, errMessage } from "../../lib/constant";

export default function Users() {
  const { fetchMore } = useQuery(
    QUERY,
    {
      variables: {
        count: 0,
        page: 1
      },
      fetchPolicy: "cache-and-network",
      skip: true
    }
  );
  const [userlist, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNext] = useState(false);

  useEffect(() => {
    setLoading(true);
    handleLoadMore();
  },[])

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        count: 10,
        page
      }
    })
    .then(res => {
      const users = (res.data && res.data.UsersList && Array.isArray(res.data.UsersList.users) && res.data.UsersList.users) || [];
      setUserList(list => [...list ,...users]);
      const isNextpage = res.data && res.data.UsersList && res.data.UsersList.hasNextPage;
      isNextpage && setPage(index => index + 1);
      setHasNext(isNextpage);
      setLoading(false);
    })
    .catch((e)=> {
      setError(e);
      setLoading(false);
    })
  }

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