import { useState } from "react"
import { useEffect } from "react"
import UsersList from "./components/UsersList"

const URL = "https://boolean-api-server.fly.dev/henrikrosenkilde/contact"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}
export default UsersSection