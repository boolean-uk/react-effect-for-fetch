import { useState } from "react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/contact")
      .then((response) => response.json())
      .then(setContacts);
    console.log("mounted users");
  }, []);

  console.log(contacts);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList contacts={contacts} />
      </div>
    </section>
  );
}

export default UsersSection;
