import { useEffect, useState } from "react"
import UserList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/api-docs/#/contact/getAllContacts")
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
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
