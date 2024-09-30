import { useEffect, useState } from "react";
import UserList from "./components/UsersList";

function UsersSection() {

  const url = "https://boolean-uk-api-server.fly.dev/sebgro98/contact";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch(url);
      const jsonData = await respone.json();
      setUsers(jsonData);
    //  console.log(jsonData);
    };
    fetchData();
  }, [])


  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UserList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
