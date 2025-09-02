import { useState, useEffect } from "react";
import UsersList from './components/UsersList'

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/TeinSchoemaker/contact";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchUsers();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={data} />
      </div>
    </section>
  )
}

export default UsersSection;