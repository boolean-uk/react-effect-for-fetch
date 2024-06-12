function UsersListItem({ user }) {
  return (
    <li style={{ background: user.favouriteColour }}>
      <img src={user.profileImage} alt={user.firstName} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;