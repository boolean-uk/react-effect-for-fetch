function UsersListItem({
  user: { firstName, lastName, favouriteColour, profileImage, email },
}) {
  const fullName = `${firstName} ${lastName}`;
  return (
    <li style={{ background: favouriteColour }}>
      <img src={profileImage} alt={fullName} />
      <h3>{fullName}</h3>
      <p>Email: {email}</p>
    </li>
  );
}

export default UsersListItem;
