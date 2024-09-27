import { useEffect } from "react";
import { useState } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
  const [usersData, setUsersData] = useState("");
  function getUsersData() {
    const gitUsername = "martenere";
    fetch("https://boolean-api-server.fly.dev/" + gitUsername + "/contact")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUsersData(data);
      });
  }

  useState(() => getUsersData(), []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {usersData && <UserList usersData={usersData} />}
      </div>
    </section>
  );
}

export default UsersSection;
