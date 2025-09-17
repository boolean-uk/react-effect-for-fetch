import {useEffect, useState} from 'react';
import UsersListItem from './UsersListItem';
function UsersList() {
    
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/hannaklh/contact`)
        .then(res => res.json())
        .then(setUsers)
    }, [])
    return(
        <>
        <div className="scroll-container">
            <ul className="users-list">
                {users.map(user => (
                    <UsersListItem
                    key={user.id}
                    imageURL={user.profileImage}
                    userName={`${user.firstName} ${user.lastName}`}
                    favoriteColor={user.favouriteColour}
                    email={user.email}/>
                ))}
            </ul>
            </div> 
        </>
    )
}
export default UsersList;