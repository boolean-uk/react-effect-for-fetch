import UserListItem from "./UsersListItem"

function UserList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user, index) => (
        <UserListItem user={user} key={index} />
      ))}
    </ul>
  )
}

export default UserList
