import { useEffect, useState } from "react";

// import the userList
import UserList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState([]);

  // Fetching

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setUsers(res.results);
      });
  };

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
