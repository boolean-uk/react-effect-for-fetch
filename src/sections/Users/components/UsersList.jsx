import UserListItem from "./UsersListItem"

function UsersList({users}){

    
    return(
        <>
        <ul className="users-list">
            <UserListItem users={users}/>
        </ul>
        </>
    )
}

export default UsersList