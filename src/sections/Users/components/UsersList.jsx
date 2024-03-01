import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/contact")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
