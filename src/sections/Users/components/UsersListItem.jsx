export default function UsersListItem({ data }) {
  return (
    <li style={`${data.favouriteColour}`}>
      <img
        src={`https://www.gravatar.com/avatar/${data.email}?s=120&d=identicon`}
        alt={data.name}
      />
      <h3>
        {data.firstName} {data.lastName}
      </h3>
      <p>Email: {data.email}</p>
    </li>
  );
}
