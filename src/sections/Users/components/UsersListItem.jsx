function UsersListItem(props) {
  const fullName = `${props.user.firstName} ${props.user.lastName}`;
  return (
    <li style={{ background: props.user.favouriteColour }}>
      <img src={props.user.profilImage} alt={fullName} />
      <h3>{fullName}</h3>
      <p>Email: {props.user.email}</p>
    </li>
  );
}

export default UsersListItem;
