
import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card } from './Card';
import { FunctionComponent } from 'react';

const USERS = gql`
  {
      users {
      firstname
      lastname
      address
      city
      state
      country
      phone
    }
  }
`;

type ItemProps = {
  from: number, 
  qty: number
}

export const User: FunctionComponent<ItemProps> = ({ from, qty }) => {
  const { loading, error, data } = useQuery(USERS);
  const [ filteredUsers, setFilteredUsers ] = useState([])

  const getUsers =  (from: number, qty: number) => {
      const lastUser = from + qty - 1;
      const filteredUsers = data.users.filter((_item: String, index: number) => {
          return ( index <= lastUser );
      })

      return filteredUsers
  }

  useEffect(() => {
    if(data) {
      setFilteredUsers( getUsers(from, qty) );
    }
  },[data, from])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="cards">
      <Card filteredUsers={ filteredUsers } />
    </div>
  )

}

