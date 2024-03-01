import PropTypes from "prop-types";

function UsersListItem({ userData }) {
  return (
    <div style={{ background: userData.favouriteColour }}>
      <img
        src={userData.profileImage}
        alt={userData.firstName + " " + userData.lastName}
      />
      <h3>{userData.firstName + " " + userData.lastName}</h3>
      <p>{userData.email}</p>
    </div>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UsersListItem;
