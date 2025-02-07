import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/noahekse/contact"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <UsersListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
