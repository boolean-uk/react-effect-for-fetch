import React, { useState, useEffect } from "react";

import UsersList from "./components/UsersList.jsx"

function UsersSection() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/sebHanssen/contact", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"><UsersList usersList={usersList} /></div>
    </section>
  )
}

export default UsersSection
