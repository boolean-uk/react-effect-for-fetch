import React, { useState, useEffect } from "react";
import { User } from "../interfaces/interface";
import UserList from "./components/UsersList";

const UsersSection = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/Stian96/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch user data from api...');
      }
      const data = await response.json();
      setUsers(data);
    }
    fetchUserData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userList={users} />
      </div>
    </section>
  )
}

export default UsersSection
