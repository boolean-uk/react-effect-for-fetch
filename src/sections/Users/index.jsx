import { useState, useEffect } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {
  const url = 'https://boolean-uk-api-server.fly.dev/siljegja/contact'

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setUser(jsonData);
    };
    fetchData();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <UsersList user={user} />
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
