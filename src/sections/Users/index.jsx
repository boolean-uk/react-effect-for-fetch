import { useState, useEffect } from "react"

function UsersSection() {
  const [users, setUsers] = useState([]);
  const url = "https://boolean-uk-api-server.fly.dev/RoderickLei/contact";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setUsers)
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map(user =>
            <li key={user.id} style={{background: "#0d7f26"}}>
              <img
                src={`${user.profileImage}`}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <h3>{user.firstName} {user.lastName}</h3>
              <p>{user.email}</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
