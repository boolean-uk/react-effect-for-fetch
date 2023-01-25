import { useEffect, useState } from "react"
import UserList from "./components/UsersList"

function UsersSection() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data.results)
        })
    }, [])

    return (
        <section>
            <h2>Users Section</h2>
            <div className="scroll-container">
                <UserList users={users} />
            </div>
        </section>
    )
}

export default UsersSection
