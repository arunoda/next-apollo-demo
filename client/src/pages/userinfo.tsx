import React, {
  useEffect, useContext, FC, useState,
} from 'react';
import { useQuery } from '@apollo/client';
import { AppContext } from '../context/context';
import { Types } from '../reducers/reducer';
import Users from '../components/Users/Users';
import { batchCount, QUERY } from '../lib/constant';

type Props = unknown;

const UserInfo: FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [next, setHasNext] = useState(false);
  const { userlist } = state;

  const { fetchMore } = useQuery(QUERY, {
    variables: {
      count: 0,
      page: 1,
    },
    fetchPolicy: 'cache-and-network',
    skip: true,
  });

  const handleLoadMore = async () => {
    try {
      const usersResponse = await fetchMore({
        variables: {
          count: batchCount,
          page,
        },
      });

      const users = (usersResponse?.data?.UsersList
        && Array.isArray(usersResponse.data.UsersList.users)
        && usersResponse.data.UsersList.users) || [];
      dispatch({
        type: Types.LoadMore,
        payload: { userlist: [...users] },
      });
      const isNextpage = usersResponse?.data?.UsersList?.next;
      if (isNextpage) {
        setPage((index) => index + 1);
      }
      setHasNext(isNextpage);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    handleLoadMore();
  }, []);

  return (
    <Users
      userlist={userlist}
      loading={loading}
      error={error}
      next={next}
      handleLoadMore={handleLoadMore}
    />
  );
};

export default UserInfo;
