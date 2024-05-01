import { useState } from "react"
import { useEffect } from "react"
import UserList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
      .then(res => res.json())
      .then(setUsers)
  }, [])
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users.map(user => 
          <UserList key={user.id} user={user} />
        )}
      </div>
    </section>
  )
}

export default UsersSection
