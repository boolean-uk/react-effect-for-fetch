import  { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]); // Changed "user" to "users"

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json()) // Changed "Response" to "response"
      .then((data) => setUsers(data.results)); // Changed "setUser" to "setUsers"
  }

  useEffect(fetchUser, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UsersList users={users}/>
      </div>
    </section>
  );
}

export default UsersSection;