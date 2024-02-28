import { useEffect, useState } from "react";
import { UsersList } from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://boolean-api-server.fly.dev/olemarkusroland/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
