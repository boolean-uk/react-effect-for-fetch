import { useState, useEffect } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/bjorgastrid/contact"
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await fetch(url);
      const jsonUsers = await userResponse.json();
      setUsers(jsonUsers);
    };
    fetchData();
  }, []);

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
