import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [usersData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/svennas/contact")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {usersData && <UsersList usersData={usersData} />}
      </div>
    </section>
  );
}

export default UsersSection;
