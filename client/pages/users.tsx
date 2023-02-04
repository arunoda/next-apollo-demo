import styled from '@emotion/styled'
import Button from '../components/Button/Button'
import UserCard from '../components/UserCard/UserCard'
import { useQuery } from '@apollo/client'
import SkeletonLoader from '../components/Skeleton/Skeleton'
import Errorboundary from './errorboundary'
import { ALL_USERS } from '../queries/getUsers'
import NoUser from '../components/NoUser/NoUser'
import { useState } from 'react'

const Users = () => {
    const { loading, error, data } = useQuery(ALL_USERS);
    const [page, setPage] = useState<number>(0);
    const numberPerPage = 20;


    const loadMoreUsers = ()=>{
        const nextPage = page + numberPerPage
        setPage(nextPage);
    }

    if (loading){
        return <SkeletonLoader />
    } 
    if (error){
        return <Errorboundary />
    } 
    if(!data.users) {
        return <NoUser/>
    }

    return (
        <>
            <Grid data-testid="user-grid">
                {
                    data?.users?.slice(0, 10).map((user: any, i)=>(
                        <UserCard key={i} user={user} />
                    ))
                }
            </Grid>
            <Button onClick={()=>loadMoreUsers()} />
        </>

    )
}

export default Users

const Grid = styled.div`
display: grid;
grid-template-rows: auto;
grid-row-gap: 15px;
width: 60%;

@media screen and (max-width:680px){
  margin:auto;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  width: 80%;
  font-size: var(--font-size-p-small);
}
`