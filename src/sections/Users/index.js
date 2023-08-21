import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  async function getData() {
    const response = await fetch("https://randomuser.me/api/?results=10")
    const json = await response.json()
    setUsers(json.results)
    }

    useEffect(() => {
      getData()
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

export default UsersSection;