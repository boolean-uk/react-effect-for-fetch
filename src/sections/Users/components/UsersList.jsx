import UsersListItem from "./UsersListItem"



export default function UsersList({users}) {

    return (
        <>
        {users.map((user, index) => (
            <UsersListItem user={user} key={index}></UsersListItem>

            
        ))}
        
        </>
        
        
    )
}


