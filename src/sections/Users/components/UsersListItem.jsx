import PropTypes from "prop-types"

function UsersListItem(props) {
  const user = props.user

  return (
    <li style={{background: `${user.favouriteColour}`}}>
        <img 
            src={user.profileImage}
            alt={user.firstName + " " + user.lastName}
        />
        <h3>{user.firstName + " " + user.lastName}</h3>
        <p>Email: {user.email}</p>
    </li>
  )
}

UsersListItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UsersListItem
