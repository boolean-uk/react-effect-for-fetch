import React, { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/gent009/contact")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
