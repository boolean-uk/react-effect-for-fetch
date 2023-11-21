import { useState, useEffect } from "react";
import User from "./UsersListItem.jsx";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users.map((user) => (
    <User
      user={user}
      key={`${user.name.title}${user.name.first}${user.name.last}`}
      users={users}
      setUsers={setUsers}
    />
  ));
};
export default UserList;