import { useEffect, useState } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {

const [users, setUsers] = useState([]);
const baseurl = 'https://boolean-uk-api-server.fly.dev/598115/contact'

useEffect(() => {fetch(baseurl).then(res => res.json()).then(setUsers)}, [])

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
