/* eslint-disable react/no-unknown-property */
import React, { FC } from 'react';
import styles from './Users.module.css';
import { errMessage } from '../../lib/constant';

type Props = {
  userlist: unknown[];
  loading: boolean;
  error: string;
  next: boolean;
  handleLoadMore: () => void;
};

const Users: FC<Props> = ({
  userlist, loading, handleLoadMore, error, next,
}: Props) => (
  <div>
    {!error && !loading && (
    <div className="container" data-testid="user-list">
      {Array.isArray(userlist)
              && userlist.map((user, index) => (
                <div
                  key={`user-list-${index + 1}`}
                  className="card"
                >
                  <div className="list-item-content">
                    <h4 className="info">{user.name}</h4>
                    <p className="info">{user.email}</p>
                    <p className="info">{user.address}</p>
                  </div>
                </div>
              ))}
    </div>
    )}
    {!error && loading && 'Loading ...'}
    {!loading && !error && next && (
    <input type="button" className={styles.loadMore} onClick={handleLoadMore} value="Load More" />
    )}
    {error && errMessage}

    <style jsx>
      {`
        .list {
          background-color: rgb(31, 31, 31);
          border-radius: 2px;
          list-style: none;
          padding: 10px 20px;
        }
        
        .container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: space-between;
        }
        
        .card {
          flex: 1 0 21%;
          margin: 5px;
          border-radius: 6px;
          border: 1px solid #eaeaea;
          background-color: white;
        }
        
        .list-item-content {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 1em;
            margin: auto;
        }
        
      `}

    </style>
  </div>
);

export default React.memo(Users);
