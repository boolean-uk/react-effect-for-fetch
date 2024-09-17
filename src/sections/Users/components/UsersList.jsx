import UsersListItem from "./UsersListItem"

function UsersList(properties) {
    return (
        <div className="scroll-container">
            <ul className="users-list">
                {properties.users.map((item, index) => (
                    <UsersListItem key={index} info={item} />
                ))}
            </ul>
        </div>
    )
}

export default UsersList
