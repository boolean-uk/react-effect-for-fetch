import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/krzysztofmmm/contact")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <UsersList users={users} />;
}

export default Users;
