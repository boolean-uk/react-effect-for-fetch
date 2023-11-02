import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

const ROOT_URL = "https://randomuser.me/api/?results=20"

function UsersSection() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
      fetch(ROOT_URL)
        .then(res => res.json())
        .then(data => setUsers(data.results))
  };

  useEffect(fetchData, []);

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
