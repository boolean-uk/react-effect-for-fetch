import { useState, useEffect } from "react";
import UserListItem from "./components/UsersListItem";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/espensolhaug1/contact")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
