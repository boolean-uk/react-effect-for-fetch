import { useState, useEffect } from "react"

import { UserList } from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/tuvaea/contact`
    );
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userList={users}/>
      </div>
    </section>
  )
}

export default UsersSection
