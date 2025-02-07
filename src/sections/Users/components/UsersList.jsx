import UsersListItem from "./UsersListItem"
function UsersList(props)
{
    return(
        <ul className="users-list">
          {props.data.map(user => <UsersListItem user={user}/>)}
        </ul>
    )
}

export default UsersList