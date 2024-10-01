import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/agrmet/contact")
    .then((rs) => rs.json())
    .then(setUsers)
  }, [])
  

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList usersList={users}/>
      </div>
    </section>
  )
}

export default UsersSection
