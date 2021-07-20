
import React from 'react';
import { Row, Button } from "react-bootstrap";
import { useQuery } from '@apollo/react-hooks'
import { GET_USERS } from '../graphql/queries';
import Cards from './cardList'
import { UserListData, UserListVars } from '../interfaces/interfaces';


const Cardswrp = (props) => {

    const PER_PAGE_COUNT = 20;
    const { data, error, loading, fetchMore } = useQuery<UserListData, UserListVars>(GET_USERS, { variables: { page: 1, perPage: PER_PAGE_COUNT } })
    const [loadMoreFlag, setLoadMoreFlag] = React.useState(true);

    //function wil get call on click of load more btn. 
    const handleLoadMore = () => {
        fetchMore({
            variables: {
                page: data.users.length + 1,
                perPage: PER_PAGE_COUNT
            }, updateQuery: (prev: any, { fetchMoreResult }) => {

                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    users: [...prev.users, ...fetchMoreResult.users]
                });

                if(fetchMoreResult.users.length < 0) setLoadMoreFlag(false)
            }
        })

    }
    return (
        <Row>
            {


                 error ? <div>Error!</div> : loading ? <div>Loading...</div> :
                    <Cards users={data.users}></Cards>

            }
            {
                loadMoreFlag && <Button onClick={handleLoadMore} variant="outline-primary" style={{ margin: 'auto 2rem', width: '80%' }}>Load More</Button>
            }

        </Row>
    )


}

export default Cardswrp

