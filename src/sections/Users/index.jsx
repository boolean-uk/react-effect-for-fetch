import React, { useEffect, useState } from 'react';

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/timsakande/contact')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map(user => (
            <li key={user.id} style={{ background: user.favouriteColor }}>
              <img src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`} alt={user.fullName} />
              <h3>{user.title} {user.fullName}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
