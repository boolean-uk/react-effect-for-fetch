import UsersListItem from "./UsersListItem"

function UsersList({userData}){
    return (
        <ul className="users-list">
        {userData.map((user, index) => (
            <UsersListItem user={user} index={index} />
        ))}
        </ul>
    )
}

export default UsersList