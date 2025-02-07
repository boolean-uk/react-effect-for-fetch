import { useEffect, useState } from "react"
import UsersList from './components/UsersList'


function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/Thomaskri0801/contact`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  console.log(users)

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
