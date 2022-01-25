// components/UsersV1.tsx
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styles from './Users.module.css';
import { QUERY, errMessage, IUser } from "../../lib/constant";

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
  const [firstIndex, setFirstIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [entireList, setList] = useState([]);

  useEffect(() => {
    fetchMore({
        variables: {
          count: 23,
          page: 1
        }
      })
      .then(res => {
        const users = (res.data && res.data.UsersList && Array.isArray(res.data.UsersList.users) && res.data.UsersList.users) || [];
        handleLoadMore(users);
        setList(users);
        setLoading(false);
      })
      .catch((e)=> {
        setLoading(false);
        setError(e);
      })
  },[])

  const handleLoadMore = (users:Array<IUser> = entireList) => {
    if (users) {
      users = users.slice(firstIndex,firstIndex + 10) || [];
      setUserList(list => [...list ,...users]);
      setFirstIndex(index => index + 10);
    }
  }

  return (<>
      {!error && !loading && <div className='cards'>
        {Array.isArray(userlist) && userlist.map((user, index) => (
          <section key={`user-list-${index+1}`} className={styles.card}>
            <h3>{user.name}</h3>
            <div>{user.email}</div>
            <div>{user.address}</div>
          </section>
          ))}
      </div>}
      {!error && loading && 'Loading ...'}
      {!loading && !error && entireList.length > firstIndex && (<button
          className={styles.loadMore}
          onClick={() => handleLoadMore(entireList)}
        >
          Load More
        </button>
      )}
      {error && errMessage}
    </>
  );
}