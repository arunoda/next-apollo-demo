export default function CardComponent({ users }) {
  return (
    users.map((item, index) => (
      <div className="card" key={index}>
        <p>
         <strong>Name: </strong>{item.name}
        </p>
        <p>
          <strong>Address: </strong>
          { item.address }
        </p>
        <p>
          <strong>Telephone: </strong>
          { item.phone }
        </p>
      </div>
    ))
  )
}