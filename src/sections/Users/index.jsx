import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

const BASE_URL = "https://boolean-uk-api-server.fly.dev";

function UsersSection() {
  const [users, setUsers] = useState([]);

  // Replace with your GitHub username
  const GITHUB_USERNAME = "andrechamoun555";

  useEffect(() => {
    fetch(`${BASE_URL}/${GITHUB_USERNAME}/contact`)
      .then((response) => response.json())
      .then(setUsers);
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
