import PropTypes from "prop-types";
function UserListItem(props) {
  const {email,favouriteColour, firstName,lastName,profileImage}=props.user
  return (
    <li style={{ background:favouriteColour }}>
      <img
        src={profileImage}
        alt={firstName+" "+lastName}
      />
      <h3>{firstName+" "+lastName}</h3>
      <p>{email}</p>
    </li>
  );
}
UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserListItem;
