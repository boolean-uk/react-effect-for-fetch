import UsersListItem from "./UsersListItem"

export default function UsersList(props) {
    const { usersList } = props;
    return (
        <ul className="users-list">
            {usersList.map((usersListItem, index) => (
                <UsersListItem usersListItem={usersListItem} key={index} />
            ))}
        </ul>
    )
}

