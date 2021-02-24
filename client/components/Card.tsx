import { FunctionComponent } from "react"

type UserProps = {
  filteredUsers: any
}

export const Card: FunctionComponent<UserProps> = ({ filteredUsers }) => {
  return (
    filteredUsers.map((item: any) => (
      <div className="card" key={item.id}>
        <p>
         <strong>Name: </strong>{item.firstname} {item.lastname}
        </p>
        <p>
          <strong>Address: </strong>
          { item.address }
          { item.city }
          { item.state }
          { item.country }
          { item.phone }
        </p>
        <p>
          <strong>Telephone: </strong>
          { item.phone }
        </p>
      </div>
    ))
  )
}
