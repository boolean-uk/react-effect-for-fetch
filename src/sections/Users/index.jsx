import { useState, useEffect } from "react"
import UsersList from "./components/UsersList";

const baseURL = "https://boolean-api-server.fly.dev/maha897/contact"

function UsersSection() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList data={data} />
      </div>
    </section>
  );
}

export default UsersSection
