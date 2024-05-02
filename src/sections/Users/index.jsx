import { useEffect } from "react"
import { useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/Alistair1080/contact`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users}></UsersList>
      </div>
    </section>
  )
}

export default UsersSection
