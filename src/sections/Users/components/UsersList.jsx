import UsersListItem from "./UsersListItem"
import PropTypes from "prop-types"

function UsersList(props) {
  return (
    <ul className="users-list">
      {props.data.map((user, i) => (
        <UsersListItem key={i} user={user} />
      ))}
  </ul>
  )
}

UsersList.propTypes = {
    data: PropTypes.array.isRequired
}
export default UsersList