import React from 'react'
export interface IUser {
  name: string
  address: string
}

const User = ({name, address}: IUser) => {

  return (
    <div className='card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
    </div>

  )
 
}
 
export default User
