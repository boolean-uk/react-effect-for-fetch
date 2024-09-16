import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {

  const [users, setUsers] = useState([])
  const baseURL = "https://boolean-api-server.fly.dev/Miadog7Extra"

  useEffect(() => {
    fetch(`${baseURL}/contact`)
    .then((response) => response.json())
    .then(setUsers);
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UsersList users={users} setUsers={setUsers} baseURL={baseURL}/>
      </div>
    </section>
  )
}

export default UsersSection
