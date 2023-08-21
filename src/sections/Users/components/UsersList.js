import UserListItem from "./UsersListItem.js"

function UsersList({ users }) {
    return (
        <ul className="users-list">
          {users.map(user => (
            <UserListItem key={user.email} user={user} />
          ))}
        </ul>
      )
    }
    export default UsersList