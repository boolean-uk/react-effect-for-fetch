import { baseUrl } from "../utils/misc";
import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";

function UsersSection() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(new URL("nikolailb/contact", baseUrl).href)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Failed to fetch data, check if json server is live and on port 3000!"
          );
        }
        return res.json();
      })
      .then((data) => setUserList(data));
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={userList} />
      </div>
    </section>
  );
}

export default UsersSection;
