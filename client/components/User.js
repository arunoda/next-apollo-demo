const User = ({ client }) => {
  return (
    <li className="user">
      <figure>
        <p>{client.name}</p>
        <span>
          #{client.address.suite}, {client.address.street}
        </span>
        <br />
        <span>{client.address.city}</span>
        <br />
        <span>{client.address.zipcode}</span>
      </figure>
    </li>
  );
};
export default User;
