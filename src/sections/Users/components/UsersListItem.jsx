function UsersListItem({ userItem }) {
  return (
    <li style={ {background: userItem.favouriteColour} }>
      <img
        src={userItem.profileImage}
        alt={userItem.firstName + " " + userItem.lastName}
      />
      <h3>Mx. {userItem.firstName + " " + userItem.lastName}</h3>
      <p>Email: {userItem.email}</p>
    </li>
  );
}

export default UsersListItem;
