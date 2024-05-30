import UserListItem from "./UsersListItem"

function UserList({data}) {
    return(
    <ul className="users-list">
        {data.map((userItem) => (
            <UserListItem key={userItem.id} data = {userItem} />
        ))}
    </ul>
    )
}

export default UserList