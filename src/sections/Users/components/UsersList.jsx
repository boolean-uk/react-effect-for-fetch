import { useState } from "react"
import { useEffect } from "react"
import UsersListItem from "./UsersListItem"

const URL ="https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact"

function UsersList(){
    const [users, setUsers] = useState([])

    useEffect(() => {console.log("Fetch users from...", URL)
    fetch(URL, {}).then(
      (response) => {
        return response.json();
      }).then((jsonData) =>{
        console.log(jsonData)
        setUsers(jsonData)
      })
      }, [])
    return (
        <ul className="users-list">
        {
          users.map((user) =>{
            return(
                <UsersListItem user={user} />
            )
          })
        }
      </ul>
    )
}

export default UsersList