import UsersListItem from './UsersListItem';

function UserList(props) {
    return (
        <ul className="users-list">
            {props.users.map((user, index) => (
                <UsersListItem userItem={user} key={index}/>
            ))}
        </ul>
    )
}

export default UserList;