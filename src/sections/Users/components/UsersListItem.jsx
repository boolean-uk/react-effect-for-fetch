function UsersListItem({ user }) {
  return (
    <li style={{ backgroundColor: user.favouriteColor }}>
      <img src={user.profileImage} alt={user.fullName} />
      <h2>{user.fullName}</h2>
      <p>{user.email}</p>
    </li>
  );
}

export default UsersListItem;
