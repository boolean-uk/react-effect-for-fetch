import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Eliassoprani/contact")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users !== null && <UsersList users={users} />}
      </div>
    </section>
  );
}

export default UsersSection;
