import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/Sabbasn/contact"
      );
      const json = await response.json();
      setUsers(json);
    };
    fetchUsers();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
