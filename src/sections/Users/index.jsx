import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

const API_URL = 'https://boolean-api-server.fly.dev/Radio58/contact';

function UsersSection() {
  const [users, setUserList] = useState([]);

  useEffect(() => {
      fetch(API_URL)
          .then(res => res.json())
          .then(data => {
            if (data) {
              setUserList(data)
            }
          });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users}/>
      </div>
    </section>
  )
}

export default UsersSection
