import UsersListItem from "./UsersListItem"

function UserList({data}){
    return(
        <ul className="users-list">
          {data.map((user) => (
            <UsersListItem key={user.id} data={user}/>
          ))}

        </ul>
    )
}

export default UserList