import { useEffect, useState } from "react";

const baseAPIUrl = 'https://boolean-api-server.fly.dev';
function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseAPIUrl}/spectraldesign/contact`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {
            users.map((user, index) => (
              <li key={index} style={{ background: user.favouriteColour }}>
                <img src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`} alt={user.name} />
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                <p>Email: {user.email}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default UsersSection