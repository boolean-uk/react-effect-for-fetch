import { useEffect, useState } from "react";
import { fetchData } from "/src/Utils/fetch";
import { UsersList } from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData("https://boolean-api-server.fly.dev/olemarkusroland/contact", setUsers)
  }, []);
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
