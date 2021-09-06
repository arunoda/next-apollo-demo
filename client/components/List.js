import React, { useState, useEffect } from "react"
import { gql, useQuery } from '@apollo/client'
import Card from './Card'
import Search from './Search'
import styles from './List.module.css'

const Component = () => {
  let [users, setUsers] = useState([]);

  const query = gql`
    {
      users {
        name
        address
        email
        phone
      }
    }
  `
  let { loading, error, data } = useQuery(query)

  useEffect(() => {
      if (loading === false && data && data.users) {
        setUsers(data.users)
      }
  }, [loading, data])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="cards">
      <Search onSearch={setUsers}/>
      <div className="cards__render">
        { users.length > 0
          ? users.map(user => {
          return (
            <div key={user.email}>
              <Card user={user} />
            </div>
          )
        })
        : <div className={styles.none}>No results</div>
      }
      </div>
    </div>
  )
}

export default Component
