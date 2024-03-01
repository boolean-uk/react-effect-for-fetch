import UsersListItem from './UsersListItem.jsx'

function UsersList( properties ){
    return(
    <ul className="users-list">
            {properties.users.map((user, index) => (
                <UsersListItem key={index} index={index} user={user} users={properties.users} baseURL={properties.baseURL}/>
            ))}
    </ul>
    )
}
export default UsersList