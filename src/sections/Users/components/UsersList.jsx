import { useEffect, useState } from "react"
import UsersListItem from "./UsersListItem"

export default function UsersList() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/MyrtheDullaart/contact')
        .then(response => response.json())
        .then(setUserData)
    }, [])

    return (
        <ul className="users-list">
          {userData.map((user, index) => {
            return <UsersListItem key={index} user={user}/>
          })}
        </ul>
    )
}