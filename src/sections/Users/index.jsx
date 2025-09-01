import { useState, useEffect } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Kerem-1034003/contact")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
