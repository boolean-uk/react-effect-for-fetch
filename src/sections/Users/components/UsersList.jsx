import UsersListItem from "./UsersListItem"

function UsersList({ users}) {
    
    return (
        <ul className="users-list">
          {users.map((user, index) => 
            <UsersListItem key={`${user.name.last}-${index}`} user={user} />
          )}
        </ul>
    )
}

export default UsersList