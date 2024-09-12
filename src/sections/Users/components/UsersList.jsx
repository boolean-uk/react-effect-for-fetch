import UsersListItem from "./UsersListItem"

export default function UsersList ({ users }) {
    return (
    <ul className="users-list">
        {users && users.length > 0 && 
        users.map((user) => <UsersListItem key={user.id} user={user}/>)}
    </ul>)
}