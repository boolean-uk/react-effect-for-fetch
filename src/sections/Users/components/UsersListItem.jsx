import PropTypes from "prop-types";

export default function UserListItem({ User }) {
  return (
    <li style={{background: '#0d7f26'}}>
      <div className="frame">
        <img
          src={User.profileImage}
          alt={User.firstName + " " + User.lastName}
        />
      </div>
      <h3>{User.firstName + " " + User.lastName}</h3>
      <p>Email: {User.email}</p>
    </li>
  );
}

UserListItem.propTypes = {
    User: PropTypes.shape({
        city: PropTypes.string,
        email: PropTypes.string,
        favouriteColour: PropTypes.string,
        firstName: PropTypes.string,
        gender: PropTypes.string,
        id: PropTypes.number,
        jobTitle: PropTypes.string,
        lastName: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        profileImage: PropTypes.string,
        street: PropTypes.string
  }),
};
