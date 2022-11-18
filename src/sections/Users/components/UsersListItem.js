function UsersListItem({ user }) {
  return (
    <li className={`bg-${user.gender === "male" ? "blue" : "pink"}`}>
      <img src={user.imageUrl} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Email: {user.email} </p>
    </li>
  );
}

export default UsersListItem;
