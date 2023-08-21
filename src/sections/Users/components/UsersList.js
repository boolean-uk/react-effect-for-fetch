import UsersListItem from "./UsersListItem"

function UsersList({users}) {
    return (
        <ul className="users-list">
            <UsersListItem
            users={users}
            />
            

        </ul>

    )
}
export default UsersList