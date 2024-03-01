import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

const GITHUB_USERNAME = "pkekkonen";

function UsersSection() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/${GITHUB_USERNAME}/contact`)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((responseData) => {
        setUsers(responseData);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users && <UsersList users={users} />}
      </div>
    </section>
  );
}

export default UsersSection;
