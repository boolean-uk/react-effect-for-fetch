import UsersListItem from "./UsersListItem"

const UsersList = (props) => {


    return ( 
        <ul className="users-list">
            {props.usersList.map((user, index) => {
                return (
                    <UsersListItem user={user} index={index} key={index}/>
                )
            })}
        </ul>
    )
}

export default UsersList