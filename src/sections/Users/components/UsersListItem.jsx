const UsersListItem = ({ user }) => {
  return (
    <li style={{ backgroundColor: user.favouriteColour }}>
      <img src={user.profileImage} alt={user.title} />
      <h2>{user.firstName + " " + user.lastName}</h2>
      <p>{user.email}</p>
    </li>
  );
};

export default UsersListItem;
