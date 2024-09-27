import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection({ users, USER_ENDPOINT }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(USER_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [USER_ENDPOINT]);

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList userData={userData} />
    </section>
  );
}

export default UsersSection;
