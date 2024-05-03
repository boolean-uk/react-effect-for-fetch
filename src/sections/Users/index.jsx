import { useState, useEffect } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  const url = "https://boolean-uk-api-server.fly.dev/JOANNABUUMA1/contact/";

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        let data = await response.json();
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
