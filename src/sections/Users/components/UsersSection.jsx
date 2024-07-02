import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Debugging: Check if data is being fetched
        setUsers(data);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList users={users} />
    </section>
  );
}

export default UsersSection;
