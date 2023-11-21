

const User = ({ user }) => (
  <li className={user.gender}>
    <img
      src={user.picture.large}
      alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
    />
    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
    <p>Email: {user.email}</p>
  </li>
);

export default User;