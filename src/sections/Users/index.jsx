import React from "react";
import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const urlAPI = "https://boolean-api-server.fly.dev/Hannapham1007/contact";

  const [users, setUsers] = useState([]);

  console.log({ users });

  const fetchData = () => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
       <UsersList usersList={users}/>
      </div>
    </section>
  );
}

export default UsersSection;
