import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

const baseAPIUrl = 'https://boolean-api-server.fly.dev';
function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseAPIUrl}/spectraldesign/contact`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
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