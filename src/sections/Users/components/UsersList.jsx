import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem"

function UsersList(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/robin-ka/contact")
            .then(response => response.json())
            .then(data => setUsers(data))  
            .catch(error => console.error('Error fetching data:', error));
    }, []); 

    
    return (
        <>
        
            <ul className="users-list">
                {users.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </ul>
        
        </>
    )
}

export default UsersList