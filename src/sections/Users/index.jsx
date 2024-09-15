import { useState, useEffect } from "react"
function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/litsas7/contact')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => <li key={index} style={{ color: user.favouriteColour }}>
            <img
              src={user.profileImage}
              alt={`${user.firstName} ${user.lastName}`}

            />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
          </li>)}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
