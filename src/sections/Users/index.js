import { useEffect, useState } from "react"
import UsersList from "./components/UsersList";

function UsersSection() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUserData() {
      let response = await fetch("https://randomuser.me/api/?page=3&results=10");
      let userData = await response.json();
      console.log(userData)
      setUsers(userData.results);
    }
    getUserData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList
          users={users}
        />

      </div>
    </section>
  )
}

export default UsersSection
