import { useState, useEffect } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/contact`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <code><h2>Users Section</h2></code>
      <div className="scroll-container">
        <ul class="users-list">
          {users.map((user, index) => (
            <li key={index} style={{ backgroundColor: user.favouriteColour }}>
              <img src={user.profileImage}/>
              <code>
              <h3>{user.firstName + " " + user.lastName} <br/> </h3>
              <strong>Gender:</strong> {user.gender} <br/>
              <strong>Email:</strong> {user.email} <br/>
              <strong>Job Title:</strong> {user.jobTitle} <br/>
              <p>{user.city}, {user.street}</p>
              </code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
