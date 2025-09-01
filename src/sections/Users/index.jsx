import { useState, useEffect } from "react";
import "../../App.css"
import UsersList from "./components/UsersList";

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/otvegg/contact"
  const [data, setData] = useState([])


  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
  }, []);

  console.log(data)
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <UsersList users={data}/>
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
