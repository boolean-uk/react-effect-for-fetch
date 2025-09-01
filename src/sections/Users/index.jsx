import { useEffect, useState } from "react"
import { getUsers } from "../../api"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  },[])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <div className="scroll-container">
          <UsersList users={ users } />
        </div>
      </div>
    </section>
  )
}

export default UsersSection
