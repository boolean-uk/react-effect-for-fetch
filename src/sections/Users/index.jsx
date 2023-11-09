import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=20
    `)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };
  useEffect(fetchData, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className='scroll-container'>
        <UsersList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
