import UsersListItem from './UsersListItem';

function UserList({users}) {
    return (
        <ul className='user-list'>
            {users.map((user) => (
                <UsersListItem key={user.id} user={user} />
            ))}
        </ul>
    )
}
export default UserList;
