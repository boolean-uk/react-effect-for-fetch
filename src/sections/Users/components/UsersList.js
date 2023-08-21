import { useEffect, useState } from "react"

import UsersListItem from "./UsersListItem"

function UsersList() {
    const [users, setUsers] = useState([])

    async function getUsers() {
        const response = await fetch('https://randomuser.me/api/?results=10&inc=gender,name,email,picture,login')
        const json = await response.json()
        setUsers([... json.results])
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <ul className="users-list">
          {
            users.map(user => {
                return <UsersListItem key={user.login.uuid} user={user} />
            })
          }
        </ul>
    )
}

export default UsersList