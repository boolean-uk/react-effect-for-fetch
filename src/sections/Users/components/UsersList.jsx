import UsersListItem from './UsersListItem';

const UsersList = ({ users }) => {
    return (
        <ul className="users-list">
            {users.map((user, i) => (
                <UsersListItem key={i} user={user} />
            ))}
        </ul>
    )
}

export default UsersList;