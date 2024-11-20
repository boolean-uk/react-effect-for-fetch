import UsersListItem from "./UsersListItem"
import PropTypes from "prop-types"

function UsersList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user, i) => (
        <UsersListItem key={i} user={user} />
      ))}
  </ul>
  )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList