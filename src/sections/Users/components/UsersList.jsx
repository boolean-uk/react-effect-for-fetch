import UsersListItem from "./UsersListItem"

export default function UsersList ({users}) {
    return (
        <ul className="users-list">
          {users.map((user, index) => {
            console.log(user)
            return (
                <UsersListItem user={user} index={index}></UsersListItem>
            )
          })}
        </ul>
    )
}