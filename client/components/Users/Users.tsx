import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './Users.module.css';
import { errMessage } from '../../lib/constant';

export default function Users() {
  const { userlist, loading, setLoading, error, handleLoadMore, hasNextPage } =
    useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    handleLoadMore();
  }, []);

  return (
    <div>
      {!error && !loading && (
        <div className="list" data-testid="user-list">
          {Array.isArray(userlist) &&
            userlist.map((user, index) => (
              <section
                key={`user-list-${index + 1}`}
                className="list-item card"
              >
                <div className="list-item-content">
                  <h4 className="info">{user.name}</h4>
                  <p className="info">{user.email}</p>
                  <p className="info">{user.address}</p>
                </div>
              </section>
            ))}
        </div>
      )}
      {!error && loading && 'Loading ...'}
      {!loading && !error && hasNextPage && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {error && errMessage}
    </div>
  );
}
