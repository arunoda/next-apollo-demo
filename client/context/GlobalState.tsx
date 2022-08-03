import React, { FC, createContext, useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY, batchCount } from '../lib/constant';

const defaultInitialState = {
  userlist: [],
  loading: false,
  error: '',
  next: 1,
  handleLoadMore: () => {},
  setLoading: () => {},
};

interface GlobalContextProps {
  userlist: any[];
  loading: boolean;
  error: string;
  next: number;
  handleLoadMore: () => void;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext =
  createContext<GlobalContextProps>(defaultInitialState);

interface GlobalProviderProps {
  children: any;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [userlist, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [next, setHasNext] = useState(false);

  const { fetchMore } = useQuery(QUERY, {
    variables: {
      count: 0,
      page: 1,
    },
    fetchPolicy: 'cache-and-network',
    skip: true,
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        count: batchCount,
        page,
      },
    })
      .then((res) => {
        const users =
          (res.data &&
            res.data.UsersList &&
            Array.isArray(res.data.UsersList.users) &&
            res.data.UsersList.users) ||
          [];
        setUserList((list) => [...list, ...users]);
        const isNextpage =
          res.data && res.data.UsersList && res.data.UsersList.next;
        isNextpage && setPage((index) => index + 1);
        setHasNext(isNextpage);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  };

  const providerValue: any = useMemo(
    () => ({
      userlist,
      loading,
      setLoading,
      error,
      next,
      handleLoadMore,
    }),
    [userlist, loading, setLoading, error, next, handleLoadMore]
  );

  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};
