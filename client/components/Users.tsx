import Card from './Card';
import { useQuery } from "@apollo/client";
import { ALL_USERS_QUERY } from "../utils/shared";
import React, { useEffect, useState } from 'react';

export default function UsersComponent() {
  const { data } = useQuery(ALL_USERS_QUERY);
  const [ users, setUsers ] = useState([]);
  const [ pagination, setPagination ] = useState(1);
  const [ loaded, setLoaded ] = useState(false);
  const LIMIT = 20;

  const getUsers = (page) => {
    const to = page * LIMIT;
    const users = data.users.filter((_item, index) => {
      return index + 1 <= to;
    });

    setLoaded(true)

    return users;
  }

  const loadMoreUsers = () => {
    setPagination(pagination + 1);
    
    setUsers(getUsers(pagination + 1));
  }

  useEffect(() => {
    if (data && !loaded) {
      setUsers( getUsers(pagination) );
    }
  })

  return (
    <div>
      <div className="card-container">
        <Card users={ users } />
      </div>
      <div className="btn-container">
        <button data-testid="load-more-button" onClick={loadMoreUsers}>
          Load More
        </button>
      </div>
    </div>
  );
}