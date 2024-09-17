import { useState, useEffect } from "react"

import UserListItem from "./UsersListItem"

function UsersList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/alexandra7667/contact')
            .then((response) => response.json())
            .then((result) => setUsers(result))
    }, [])

    return (
        <ul className="users-list">
            {users.map((user, index) => (
                <UserListItem
                    key={index}
                    user={user}
                />
            ))}
        </ul>
    )
}

export default UsersList