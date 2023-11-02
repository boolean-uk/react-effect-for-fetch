import { useEffect, useState } from "react"

import UsersList from "./components/UsersList"

function UsersSection() {

  const userURL = 'https://randomuser.me/api/?inc=name,gender,email,picture&results=10'

  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch(userURL)
        .then(res => res.json())
        .then(data => setUsers(data.results))
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
