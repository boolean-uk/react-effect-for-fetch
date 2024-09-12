import { useState, useEffect } from "react";
import UsersListItem from "./UsersListItem";
function UsersList() {
  const [user, setUser] = useState([]);

  console.log({ user });

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact`)
      .then((response) => response.json())
      .then((item) => setUser(item));
  }, []);
  return (
    <ul className="users-list">
      {user.map((item, index) => (
        <UsersListItem item={item} key={index} />
      ))}
    </ul>
  );
}
export default UsersList;
