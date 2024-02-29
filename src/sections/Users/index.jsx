import { useState, useEffect } from "react";
import UsersListComponent from "./components/UsersList";

export default function UsersSection() {
  const apiURL = 'https://boolean-api-server.fly.dev/'
  const gitUser = 'moph13121'
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiURL}${gitUser}/contact`)
      .then(response => response.json())
      .then(data => setUsers(data), console.log(users))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersListComponent users={users} />
      </div>
    </section>
  )
}


