import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/SebastianEngan/contact`)
      .then(res => res.json())
      .then(userInfo => setUsers(userInfo))
  }, [])

  useEffect(() => 
  {console.log(users)} ,[users])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users}/>
      </div>
    </section>
  )
}

export default UsersSection
