import { useState, useEffect } from 'react';

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={index} style={{ backgroundColor: user.favouriteColour }}>
              <img
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <h3>{user.jobTitle} {user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.city}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
