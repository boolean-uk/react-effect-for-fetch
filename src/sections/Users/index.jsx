import UsersList from "./components/UsersList"
import { useEffect, useState } from "react"

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
