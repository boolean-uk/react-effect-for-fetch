import PropTypes from 'prop-types'
import UsersListItem from "./UsersListItem.jsx"

function UsersList ({users}) {
return (
    <ul className="users-list">
        {users.map((user, index) =>
        <UsersListItem key={index} user={user}></UsersListItem>
        )}
  </ul>
 )
}

UsersList.propTypes = {
    users: PropTypes.array
}

export default UsersList






