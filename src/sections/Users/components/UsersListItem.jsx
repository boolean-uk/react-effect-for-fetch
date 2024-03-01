function UsersListItem(props) {
  return (
    <li style={{ background: props.item.favouriteColour }}>
      <img src={props.item.profileImage} alt={props.item.firstName} />
      <h3>
        {props.item.firstName} {props.item.lastName}
      </h3>
      <p>Email: {props.item.email}</p>
    </li>
  );
}
export default UsersListItem;
