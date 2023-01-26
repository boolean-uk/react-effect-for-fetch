import UserListItem from "./UsersListItem";
import { useState } from "react";
import { useEffect } from "react";

function UserList(){
    const [users, setUsers] = useState([])

    useEffect(() => {
  
      fetch(`https://randomuser.me/api/?results=20`)
        .then((response) => response.json())
        .then((data) => {
          console.log("userdata", data.results)
          setUsers(data.results)
        })
    }, [])
    
    
    return(
        <ul className="users-list">
            {users.map((user, index) => {
               return <UserListItem user={user} index={index} />
            })}
        </ul>
    )
}

export default UserList;