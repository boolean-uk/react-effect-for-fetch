import { useEffect, useState } from "react"

import UsersList from "./components/UsersList"

function UsersSection() {

  const userURL = 'https://randomuser.me/api/?inc=name,gender,email,picture&results=10'

  const [users, setUsers] = useState([])
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    if (!dataType) {
      fetch(userURL)
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }
  }, [dataType])

  console.log(users)

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
