import "../../App.css";
import { useState, useEffect } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/najemhamo/contact")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <ul className="users-list">
            {users.map((user) => {
              return (
                <li style={{ background: user.favouriteColour }} key={user.id}>
                  <img
                    src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                    alt={user.name}
                  />
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <h3>Email: {user.email}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default UsersSection;
