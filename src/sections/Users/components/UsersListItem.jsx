function UsersListItem({ user }) {
  return (
    <>
      <li style={{ backgroundColor: `${user.favouriteColour}` }}>
        <img
          src={user.profileImage}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <p>Email: {user.email}</p>
      </li>
    </>
  );
}
export default UsersListItem;
