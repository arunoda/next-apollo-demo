import styled from '@emotion/styled'
import Button from '../components/Button/Button'
import UserCard from '../components/UserCard/UserCard'
import { useQuery } from '@apollo/client'
import SkeletonLoader from '../components/Skeleton/Skeleton'
import Errorboundary from './errorboundary'
import { ALL_USERS } from '../queries/getUsers'



const Users = () => {
    const { loading, error, data } = useQuery(ALL_USERS);

    const loadMoreData = () => {

    }

    if (loading) return <SkeletonLoader />
    if (error) return <Errorboundary />

    return (
        <>
            <Grid>
                {
                    data?.slice(0, 20).map((user)=>{
                        <UserCard
                        user={user}
                        />
                    })
                }
            </Grid>
            <Button />
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