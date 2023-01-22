import { useEffect, useState } from 'react'
import { User } from '@/types/auto-generated'
import { useLazyQuery } from '@apollo/client'
import { getUsersQuery } from '@/queries/users.query'

type Props = {
  users: User[]
}
const LoadMoreUsers = ({ users }: Props) => {
  const [usersData, setUsersData] = useState(users)
  const [offset, setOffset] = useState(10)

  useEffect(() => {
    setUsersData(users)
  }, [users])

  const setUsers = (users: User[]) => {
    if (!users) {
      return
    }

    const newUsers = usersData.concat(users)
    setUsersData(newUsers)
    setOffset(offset + 10)
  }

  // TODO: handle specific error
  const [fetchUsers, { loading, error }] = useLazyQuery(getUsersQuery, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setUsers(data?.users ?? [])
    },
  })

  const loadMoreData = () => {
    let queryVariables = {
      limit: 10,
      offset,
    }
    fetchUsers({
      variables: queryVariables,
    })
  }

  return (
    <div>
      {usersData.map((user, index) => {
        return (
          <div key={index}>
            <div>
              <div> {user.name}</div>
              <div> {user.email}</div>
              <div> {user.phoneNumber}</div>
            </div>
            <br />
            <br />
          </div>
        )
      })}
      {error ? (
        <div>No more users available</div>
      ) : (
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <button onClick={() => loadMoreData()}>Load more</button>
          )}
        </>
      )}
    </div>
  )
}
export default LoadMoreUsers
