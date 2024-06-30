import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData} />
      </div>
    </section>
  );
}

export default UsersSection;
