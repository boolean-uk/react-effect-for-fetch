import UsersListItem from './UsersListItem'

export default function UsersList ({users}) {
    return (
        <ul className="users-list">
            {users.map((user, i) => {
                return (
                    <UsersListItem key={i} user={user}/>
                )
            })}
    </ul>
    )
}