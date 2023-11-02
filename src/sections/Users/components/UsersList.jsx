import { useState, useEffect } from "react"
import User from "./UsersListItem.jsx"


function UserList() {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }
    useEffect(getUsers, [])

    return (
        users.map((user) => (
            <User
                user={user}
                key={`${user.name.title}${user.name.first}${user.name.last}`}
                users={users}
                setUsers={setUsers} />
        ))
    )
}

export default UserList