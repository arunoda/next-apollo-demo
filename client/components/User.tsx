import React from 'react'
import { IUser } from '../pages/users'

const User = ({name, address}: IUser) => {

  return (
    <div className='card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
    </div>

  )
 
}
 
export default User
