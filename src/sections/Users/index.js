import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));
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
