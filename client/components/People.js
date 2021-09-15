import { gql, useQuery } from "@apollo/client"

const query = gql`
  query GetPeople {
    people {
      name
      city
      email
      phone
    }
  }
`;

const Person = ({email, name, phone, city}) => (
  <li>
    <h2>{name}</h2>
    <div>City: {city}</div>
    <div>Phone: {phone}</div>
    <div>Email: {email}</div>
   </li>
)

const People = ({people}) => (
  <ul>
    {people.map( (person, i) => <Person key={i} {...person}/>)}
  </ul>

)

const Component = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <span>
      {loading ? '..' : <People people={data.people} />}
    </span>
  );
}



export default Component
