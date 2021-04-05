import React, {useState, useEffect} from 'react';
import {gql, useQuery} from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import Grid from './Grid';
import UserCard from './UserCard';
import Button from '../components/Button';

const GET_ITEMS = gql`
  query GET_USER_DETAILS {
    users {
      id
      firstname
      lastname
      address
      email
      phone
    }
  }
`;

const UserList = () => {
  const {data, loading, error} = useQuery(GET_ITEMS);
  const [loadMore, setLoadMore] = useState(0);

  if (loading) return <h2>Loading...</h2>;
  if (error) return `Error! ${error.message}`;

  const PER_PAGE = 20;
  const fetchMoreData = () => {
    const nextPage = loadMore + PER_PAGE;

    setLoadMore(nextPage);

    // console.log('users:::', data.users);
    console.log('load 20 more:::', nextPage);
  };

  const userList = data.users
    .slice(0, 8)
    .map((user) => (
      <UserCard
        key={user.id}
        firstname={user.firstname}
        lastname={user.lastname}
        address={user.address}
        email={user.email}
        phone={user.phone}
      />
    ));

  return (
    <InfiniteScroll
      dataLength={data.users.length} // Render the next data
      next={fetchMoreData}
      hasMore={true}
      loader={
        <div style={{textAlign: 'center', margin: '1em 0'}}>
          <Button onClick={fetchMoreData}>Load more</Button>
        </div>
      }
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>This is the last item.</b>
        </p>
      }
    >
      <GridWrapper data-test="grid">
        <Grid>{userList}</Grid>
      </GridWrapper>
    </InfiniteScroll>
  );
};

export default UserList;

const GridWrapper = styled.div``;
